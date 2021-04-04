using System;

namespace ShopLib
{
    public class Product
    {
        public string name;
        public int price;
        public static int count1 = 0;

        public Product(string _name, int _price)
        {
            name = _name;
            price = _price;
            count1++;
            Print();
        }
        public void Print() 
        {
            Console.Write(count1 + ") ");
            Console.WriteLine("Product: " + name);
            Console.WriteLine("Price: " + price);
        }
    }
}