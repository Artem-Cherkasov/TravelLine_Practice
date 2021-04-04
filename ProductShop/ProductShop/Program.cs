using ShopLib;
using System;


namespace ProductShop
{
    class Program
    {
        static void Main(string[] args)
        {
            Greetings visitor = new Greetings();
            Product bread = new Product("Bread", 20);
            Product apple = new Product("Apple", 15);
            Product tomato = new Product("Tomato", 30);
            Product meat = new Product("Meat", 45);
            Selling product = new Selling();            
        }
    }
}
