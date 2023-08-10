using ApiAudit.Interfaces;
using ApiAudit.Services;
using Audit.Core;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using NugetPlatform.Helpers;
using System;
using System.Linq;
using ApiAudit.Helpers;

namespace ApiAudit {
    public class Startup {
        public Startup(IConfiguration configuration, IWebHostEnvironment env) {
            Configuration = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: false, reloadOnChange: true)
                .AddEnvironmentVariables()
                .Build();
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services) {
            services.AddTransient<IAuditEventSummaryRepository, AuditEventSummaryRepository>();
            services.AddTransient<DatabaseHelper>();

            services.AddSingleton<AuditDataProvider>(new Audit.SqlServer.Providers.SqlDataProvider(config => config
                .ConnectionString(Environment.GetEnvironmentVariable("DBCREDENTIAL"))
                .TableName("Event")
                .IdColumnName("EventId")
                .CustomColumn("EventType", ev => ev.EventType)
                .JsonColumnName("JsonData")));

            services.AddSwaggerGen(c => {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "BSC Platform Audit API", Version = "v1" });
                c.ResolveConflictingActions(apiDescriptions => apiDescriptions.First());
            });

            services.AddAuthentication("Bearer")
                .AddJwtBearer("Bearer", options => {
                    options.Authority = Configuration["ConfigOptions:AppIdentityBaseUrl"];

                    options.TokenValidationParameters = new TokenValidationParameters {
                        ValidateAudience = false
                    };
                });

            services.AddHealthChecks();
            services.AddControllers().AddJsonOptions(options => {
                options.JsonSerializerOptions.Converters.Add(new DateTimeConverter());
            });
        }

        public static void Configure(IApplicationBuilder app, IWebHostEnvironment env) {
            if (env.IsDevelopment()) {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "BSC Platform Audit API"));
            } else {
                app.UseHsts();
            }

            app.UseRouting();

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseHttpsRedirection();

            app.UseEndpoints(endpoints => {
                endpoints.MapHealthChecks("/health");
                endpoints.MapControllers();
            });
        }
    }
}
