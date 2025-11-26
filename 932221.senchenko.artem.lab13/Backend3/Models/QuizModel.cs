using System.ComponentModel.DataAnnotations;

namespace Backend3.Models
{
    public class QuizModel
    {
        
        public int A { get; set; }
        public int B { get; set; }

        
        [Required(ErrorMessage = "Введите ответ")]
        public int? UserAnswer { get; set; }

       
        public int CorrectAnswer => A + B;

        
        public int Step { get; set; }

       
        public int CorrectCount { get; set; }

       
        public List<string> History { get; set; } = new List<string>();
    }
}
