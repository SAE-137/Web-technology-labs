using Microsoft.AspNetCore.Mvc;
using Backend3.Models;
using System;

namespace Backend3.Controllers
{
    public class MockupsController : Controller
    {
        private static readonly Random rnd = new Random();

        private void GenerateNext(QuizModel model)
        {
            model.A = rnd.Next(1, 10);
            model.B = rnd.Next(1, 10);
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public IActionResult Quiz()
        {
            var model = new QuizModel
            {
                Step = 1,
                History = new List<string>()
            };

            GenerateNext(model);
            return View(model);
        }

        [HttpPost]
        public IActionResult Quiz(QuizModel model, string action)
        {
           
            model.History ??= new List<string>();

          
            if (!ModelState.IsValid)
            {
                return View(model);
            }

          
            bool isCorrect = model.UserAnswer == model.CorrectAnswer;

          
            model.History.Add($"{model.A} + {model.B} = {model.UserAnswer}");

            if (isCorrect)
                model.CorrectCount++;

           
            if (action == "finish" || model.Step >= 4)
            {
                return View("QuizResult", model);
            }

          
            model.Step++;
            model.UserAnswer = null;      
            GenerateNext(model);       

          
            ModelState.Clear();

            return View(model);
        }
    }
}
