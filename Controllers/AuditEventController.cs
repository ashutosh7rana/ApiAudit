using ApiAudit.Interfaces;
using ApiAudit.Services;
using Audit.Core;
using BscModel.AuditEvent;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Linq;

namespace ApiAudit.Controllers {
    [Route("api/[controller]")]
    [Authorize]
    [ApiController]

    public class AuditEventController : ControllerBase {
        private AuditDataProvider _dataProvider;
        private readonly ILogger<AuditEventController> _logger;

        public AuditEventController(AuditDataProvider dataProvider, ILogger<AuditEventController> logger) {
            _dataProvider = dataProvider;
            _logger = logger;
        }

        [HttpPost]
        [Route("AddAuditEvent")]
        public ActionResult<AuditEvent> AddAuditEvent([FromBody] AuditEvent entity) {
            try {
                var result = _dataProvider.InsertEvent(entity);
                return Ok();
            } catch (Exception ex) {
                _logger.LogError(ex, "An error occurred while adding the audit event.");
                return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while processing the request.");
            }
        }

        [HttpGet]
        [Route("GetAuditEventById")]
        public ActionResult<AuditEvent> GetAuditEventById([FromQuery] int id) {
            try {
                var result = _dataProvider.GetEvent(id);
                if (result != null) {
                    return Ok(result);
                } else {
                    return NotFound();
                }
            } catch (Exception ex) {
                _logger.LogError(ex, "An error occurred while fetching the audit event.");
                return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while processing the request.");
            }
        }

    }
}
