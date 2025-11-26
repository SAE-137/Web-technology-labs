using Microsoft.AspNetCore.Mvc;

namespace Backend2.Controllers
{
    public class HomeController1 : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
