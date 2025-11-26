using Microsoft.AspNetCore.Mvc;
using Backend2.Services;
using Backend2.Models;

namespace Backend2.Controllers
{
    public class CalcController : Controller
    {
        private readonly ICalcService _calc;

        public CalcController(ICalcService calc)
        {
            _calc = calc;
        }

       
        public IActionResult Index()
        {
            return View();
        }

       
        [HttpGet]
        public IActionResult Manual()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Manual(IFormCollection form)
        {
            double a = double.Parse(form["A"]);
            double b = double.Parse(form["B"]);
            string op = form["Op"];

            double result = op switch
            {
                "+" => _calc.Add(a, b),
                "-" => _calc.Sub(a, b),
                "*" => _calc.Mult(a, b),
                "/" => b == 0 ? double.NaN : double.Parse(_calc.Div(a, b)),
                _ => 0
            };

            ViewBag.Result = $"{a} {op} {b} = {result}";
            return View("Result");
        }

       
        [HttpGet]
        public IActionResult ManualWithSeparateHandlers()
        {
            return View();
        }

        [HttpPost]
        public IActionResult ManualWithSeparateHandlers(double A, double B, string Op)
        {
            double result = Op switch
            {
                "+" => _calc.Add(A, B),
                "-" => _calc.Sub(A, B),
                "*" => _calc.Mult(A, B),
                "/" => B == 0 ? double.NaN : double.Parse(_calc.Div(A, B)),
                _ => 0
            };

            ViewBag.Result = $"{A} {Op} {B} = {result}";
            return View("Result");
        }

        
        [HttpGet]
        public IActionResult ModelBindingInParameters()
        {
            return View();
        }

        [HttpPost]
        public IActionResult ModelBindingInParameters(double A, double B, string Op)
        {
            double result = Op switch
            {
                "+" => _calc.Add(A, B),
                "-" => _calc.Sub(A, B),
                "*" => _calc.Mult(A, B),
                "/" => B == 0 ? double.NaN : double.Parse(_calc.Div(A, B)),
                _ => 0
            };

            ViewBag.Result = result.ToString();
            return View("Result");
        }

        [HttpGet]
        public IActionResult ModelBindingInSeparateModel()
        {
            return View();
        }

        [HttpPost]
        public IActionResult ModelBindingInSeparateModel(CalcModel model)
        {
            double a = model.A;
            double b = model.B;
            string op = model.Op;

            double result = op switch
            {
                "+" => _calc.Add(a, b),
                "-" => _calc.Sub(a, b),
                "*" => _calc.Mult(a, b),
                "/" => b == 0 ? double.NaN : double.Parse(_calc.Div(a, b)),
                _ => 0
            };

            ViewBag.Result = result.ToString();
            return View("Result");
        }
    }
}
