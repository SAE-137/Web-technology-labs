namespace Backend2.Services
{
    public class CalcService : ICalcService
    {
        public double Add(double a, double b) => a + b;
        public double Sub(double a, double b) => a - b;
        public double Mult(double a, double b) => a * b;

        public string Div(double a, double b)
        {
            if (b == 0)
                return "error";

            return (a / b).ToString();
        }
    }
}
