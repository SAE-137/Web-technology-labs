namespace Backend2.Services
{
    public interface ICalcService
    {
        double Add(double a, double b);
        double Sub(double a, double b);
        double Mult(double a, double b);
        string Div(double a, double b);
    }
}
