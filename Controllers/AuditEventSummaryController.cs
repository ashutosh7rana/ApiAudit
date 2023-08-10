using ApiAudit.Interfaces;
using ApiAudit.Services;
using Audit.Core;
using BscModel.AuditEvent;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace ApiAudit.Controllers {
    [Route("api/[controller]")]
    [Authorize]
    [ApiController]

    public class AuditEventSummaryController : ControllerBase {
        private readonly IAuditEventSummaryRepository _auditEventSummaryRepository;
        private readonly ILogger<AuditEventSummaryController> _logger;

        public AuditEventSummaryController(IAuditEventSummaryRepository auditEventSummaryRepository, ILogger<AuditEventSummaryController> logger) {
            _auditEventSummaryRepository = auditEventSummaryRepository;
            _logger = logger;
        }

        [HttpPost]
        [Route("GetAllAuditEvents")]
        public async Task<IActionResult> GetAllAuditEvents([FromBody] AuditEventSearch entity) {
            try {
                var result = await _auditEventSummaryRepository.GetAllAuditEventsAsync(entity);
                return Ok(result);
            } catch (Exception ex) {
                // Log the exception here
                _logger.LogError(ex, "An error occurred while fetching all audit events.");
                return StatusCode(500, "Internal server error");
            }
        }

        [HttpGet]
        [Route("GetAuditEventSummaryById")]
        public async Task<IActionResult> GetAuditEventSummaryById([FromQuery] int id) {
            try {
                var result = await _auditEventSummaryRepository.GetAuditEventSummaryByIdAsync(id);
                if (result != null) {
                    return Ok(result);
                } else {
                    return NotFound("Audit event summary not found");
                }
            } catch (Exception ex) {
                // Log the exception here
                _logger.LogError(ex, $"An error occurred while fetching the audit event summary with ID {id}.");
                return StatusCode(500, "Internal server error");
            }
        }
    }
}
