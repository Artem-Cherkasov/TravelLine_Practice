using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShopLib
{
    public class Selling
    {
        public double product_num;
        public string product_name;
        public int cost;
        public double sum;        
        public static int count2;
        public string[] list = new string[100];
        public bool selled;
        public Selling() 
        {
            sum = 0;
            cost = 0;
            count2 = 0;
            selled = false;
            product_num = 0;
        }
        public void Offer() 
        {
            selled = true;
            Console.WriteLine("Ok, choose the number of product. (1, 2, 3 or 4)");
            product_num = Convert.ToDouble(Console.ReadLine());
            if (product_num == 1)
            {
                cost = 20;
                product_name = "Bread";
            }
            else if (product_num == 2)
            {
                cost = 15;
                product_name = "Apple";
            }
            else if (product_num == 3)
            {
                cost = 30;
                product_name = "Tomato";
            }
            else if (product_num == 4)
            {
                cost = 45;
                product_name = "Meat";
            }
            else 
            {
                Console.WriteLine("There is no such product like: " + product_num);
                selled = false;
            }
        }
        public void Addition() 
        {
            if (selled == true)
                sum += cost;
        }
        public void Insert() 
        {
            if (selled == true)
            {
                Console.WriteLine("You bought " + product_name);
                list[count2] = product_name;
                count2++;
            }
            else
                selled = true;
        }
        public void Conclude() 
        {
            if (selled == true) 
            {
                Console.WriteLine("Thank you for your purchase, here is your cheque:");
                for (int i = 0; i < count2; i++)
                {
                    Console.WriteLine(list[i] + ";");
                }
                Console.WriteLine("The total amount of all purchases is equal to: " + sum);
                Console.WriteLine("Have a nice day!");
            }
            else
                Console.WriteLine("Have a nice day!");            
        }
    }
}
