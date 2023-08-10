using ApiAudit.Helpers;
using ApiAudit.Interfaces;
using BscModel.AuditEvent;
using Dapper;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace ApiAudit.Services {
    public class AuditEventSummaryRepository : IAuditEventSummaryRepository {
        private readonly DatabaseHelper _databaseHelper;
        private readonly ILogger<AuditEventSummaryRepository> _logger;

        public AuditEventSummaryRepository(DatabaseHelper databaseHelper, ILogger<AuditEventSummaryRepository> logger) {
            _databaseHelper = databaseHelper;
            _logger = logger;
        }

        public async Task<List<AuditEventSummary>> GetAllAuditEventsAsync(AuditEventSearch entity) {
            try {
                var p = new DynamicParameters();
                p.Add("@OrganizationId", entity.OrganizationId);
                p.Add("@StartDate", entity.StartDate);
                p.Add("@EndDate", entity.EndDate);
                p.Add("@FamilyEventsOnly", entity.FamilyEventsOnly);

                return await _databaseHelper.ExecuteCommandAsync(async conn =>
                {
                    var auditEvents = await conn.QueryAsync<AuditEventSummary>("sp_GetAllAuditEvents", p, commandType: CommandType.StoredProcedure);
                    return auditEvents.ToList();
                });
            } catch (SqlException ex) {
                _logger.LogError(ex, "An SQL exception occurred while fetching audit events.");
                throw;
            } catch (Exception ex) {
                _logger.LogError(ex, "An exception occurred while fetching audit events.");
                throw;
            }
        }

        public async Task<AuditEventSummary> GetAuditEventSummaryByIdAsync(int id) {
            try {
                return await _databaseHelper.ExecuteCommandAsync(async conn =>
                    await conn.QuerySingleOrDefaultAsync<AuditEventSummary>("sp_GetAuditEventSummaryById", new { EventId = id }, commandType: CommandType.StoredProcedure));
            } catch (SqlException ex) {
                _logger.LogError(ex, $"An SQL exception occurred while fetching audit event summary with ID {id}.");
                throw;
            } catch (Exception ex) {
                _logger.LogError(ex, $"An exception occurred while fetching audit event summary with ID {id}.");
                throw;
            }
        }
    }
}
