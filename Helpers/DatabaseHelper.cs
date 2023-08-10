using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System.Data;
using System.Threading.Tasks;
using System;

namespace ApiAudit.Helpers {
    public class DatabaseHelper {
        private readonly string _connStr;

        public DatabaseHelper(IConfiguration configuration) {
            _connStr = Environment.GetEnvironmentVariable("DBCREDENTIAL");
        }

        public IDbConnection Connection => new SqlConnection(_connStr);

        public async Task ExecuteCommandAsync(Func<IDbConnection, Task> task) {
            using (var conn = Connection) {
                conn.Open();
                await task(conn);
            }
        }

        public async Task<T> ExecuteCommandAsync<T>(Func<IDbConnection, Task<T>> task) {
            using (var conn = Connection) {
                conn.Open();
                return await task(conn);
            }
        }
    }
}
