using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShopLib
{
    public class Greetings
    {
        public string visitor;
        public void Greet()
        {
            visitor = Convert.ToString(Console.ReadLine());
            Console.WriteLine("Nice to meet you " + visitor + " here is our list of products:");
        }
    }
}
