﻿using ShopLib;
using System;


namespace ProductShop
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello visitor, what is your name?");
            Greetings visitor = new Greetings();
            visitor.Greet();
            Product bread = new Product(1, "Bread", 20);
            bread.Print();
            Product apple = new Product(2,"Apple", 15);
            apple.Print();
            Product tomato = new Product(3, "Tomato", 30);
            tomato.Print();
            Product meat = new Product(4, "Meat", 45);
            meat.Print();
            Console.WriteLine("Do you want to buy something? (yes or no)");
            Selling product = new Selling();
            product.Offer();
            product.Conclude();
        }
    }
}
