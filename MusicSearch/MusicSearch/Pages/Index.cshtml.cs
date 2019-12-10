using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;
using MusicSearch.Models;
using MusicSearch.Services;

namespace MusicSearch.Pages
{
    public class IndexModel : PageModel
    {
        private readonly ILogger<IndexModel> _logger;

        public IndexModel(ILogger<IndexModel> logger,
            JsonFileInfoService infoService)
        {
            _logger = logger;
            InfoService = infoService;
            
        }

        public JsonFileInfoService InfoService { get; }
        public IEnumerable<Info> SongInformation { get; private set; }

        public void OnGet()
        {
            SongInformation = InfoService.GetInfo();
        }
    }
}
