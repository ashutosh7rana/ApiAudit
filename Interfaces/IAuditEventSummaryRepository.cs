using BscModel.AuditEvent;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ApiAudit.Interfaces {
    public interface IAuditEventSummaryRepository {
        Task<List<AuditEventSummary>> GetAllAuditEventsAsync(AuditEventSearch entity);
        Task<AuditEventSummary> GetAuditEventSummaryByIdAsync(int id);
    }
}
