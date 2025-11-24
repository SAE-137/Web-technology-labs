using Microsoft.AspNetCore.Mvc;
using WebApplication2.Models;
using WebApplication2.Services;

namespace WebApplication2.Controllers
{
    public class CalcServiceController : Controller
    {
        private readonly ICalcService _calc;

        public CalcServiceController(ICalcService calc)
        {
            _calc = calc;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult PassUsingModel()
        {
            var vm = new CalcViewModel
            {
                A = _calc.A,
                B = _calc.B
            };

            return View(vm);
        }

        public IActionResult PassUsingViewData()
        {
            ViewData["A"] = _calc.A;
            ViewData["B"] = _calc.B;

            ViewData["Add"] = _calc.Add();
            ViewData["Sub"] = _calc.Sub();
            ViewData["Mult"] = _calc.Mult();
            ViewData["Div"] = _calc.Div();

            return View();
        }

        public IActionResult PassUsingViewBag()
        {
            ViewBag.A = _calc.A;
            ViewBag.B = _calc.B;

            ViewBag.Add = _calc.Add();
            ViewBag.Sub = _calc.Sub();
            ViewBag.Mult = _calc.Mult();
            ViewBag.Div = _calc.Div();

            return View();
        }

        public IActionResult AccessServiceDirectly()
        {
            return View(_calc);
        }
    }
}
