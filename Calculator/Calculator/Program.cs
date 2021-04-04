using System;

namespace Calculator
{
    class Program
    {
        static void Main(string[] args)
        {
            string cont;
            do
            {
                double n1;
                double n2;
                string operation;
                double answer;
                Console.WriteLine("Enter your first number:");
                n1 = Convert.ToDouble(Console.ReadLine());
                Console.WriteLine("Enter your second number:");
                n2 = Convert.ToDouble(Console.ReadLine());
                Console.WriteLine("Enter operation (+, -, *, /):");
                operation = Convert.ToString(Console.ReadLine());
                if (operation == "+")
                {
                    answer = n1 + n2;
                    Console.WriteLine("The answer is: " + n1 + " + " + n2 + " = " + answer);
                }
                else if (operation == "-")
                {
                    answer = n1 - n2;
                    Console.WriteLine("The answer is: " + n1 + " - " + n2 + " = " + answer);
                }
                else if (operation == "*")
                {
                    answer = n1 * n2;
                    Console.WriteLine("The answer is: " + n1 + " * " + n2 + " = " + answer);
                }
                else if (operation == "/")
                {
                    answer = n1 / n2;
                    Console.WriteLine("The answer is: " + n1 + " / " + n2 + " = " + answer);
                }
                else
                    Console.WriteLine("There is no such operation like: " + operation);
                Console.WriteLine("Do you want to continue? (yes/no)");
                cont = Convert.ToString(Console.ReadLine());
            } while (cont == "yes");

        }
    }
}
