using Microsoft.AspNetCore.Mvc;
using Backend3.Models;

namespace Backend3.Controllers
{
    public class MockupsController : Controller
    {
        private static readonly Random rnd = new Random();

        private QuizModel GenerateNext(QuizModel model)
        {
            model.A = rnd.Next(1, 10);
            model.B = rnd.Next(1, 10);
            return model;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Quiz()
        {
            var model = new QuizModel
            {
                Step = 1
            };

            GenerateNext(model);
            return View(model);
        }

        [HttpPost]
        public IActionResult Quiz(QuizModel model, string action)
        {
            if (!ModelState.IsValid)
                return View(model);

            
            bool correct = model.UserAnswer == model.CorrectAnswer;

            
            model.History.Add($"{model.A} + {model.B} = {model.UserAnswer}");

            if (correct)
                model.CorrectCount++;

            
            if (action == "finish" || model.Step >= 4)
                return RedirectToAction("QuizResult", model);

           
            model.Step++;
            model.UserAnswer = null;
            GenerateNext(model);

            return View(model);
        }

        public IActionResult QuizResult(QuizModel model)
        {
            return View(model);
        }
    }
}
