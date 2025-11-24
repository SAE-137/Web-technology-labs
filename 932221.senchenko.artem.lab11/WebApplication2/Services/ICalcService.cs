namespace WebApplication2.Services
{
    public interface ICalcService
    {
        int A { get; }
        int B { get; }

        int Add();
        int Sub();
        int Mult();
        double? Div(); 
    }
}
