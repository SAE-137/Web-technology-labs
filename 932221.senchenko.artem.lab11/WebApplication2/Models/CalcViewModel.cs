namespace WebApplication2.Models
{
    public class CalcViewModel
    {
        public int A { get; set; }
        public int B { get; set; }

        public int Add => A + B;
        public int Sub => A - B;
        public int Mult => A * B;

        public string Div =>
            B == 0 ? "деление на 0" : (A / (double)B).ToString();
    }
}
