using System;

namespace WebApplication2.Services
{
    public class CalcService : ICalcService
    {
        private readonly Random _rnd = new Random();

        public int A { get; }
        public int B { get; }

        public CalcService()
        {
            A = _rnd.Next(0, 11);
            B = _rnd.Next(0, 11);
        }

        public int Add() => A + B;

        public int Sub() => A - B;

        public int Mult() => A * B;

        public double? Div()
        {
            if (B == 0)
                return null; 
            return (double)A / B;
        }
    }
}
