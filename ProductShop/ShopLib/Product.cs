using System;

namespace ShopLib
{
    public class Product
    {
        public int productid;
        public string name;
        public int price;


        public Product(int number, string product, int cost)
        {
            productid = number;
            name = product;
            price = cost;
        }
        public void Print() 
        {
            Console.Write(productid + ") ");
            Console.WriteLine("Product: " + name);
            Console.WriteLine("Price: " + price);
        }
    }
}