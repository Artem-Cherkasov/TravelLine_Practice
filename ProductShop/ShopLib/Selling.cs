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
        public double sum = 0;
        public string cont;
        public static int count2 = 0;
        public string[] list = new string[100];
        public bool selled = false;
        public Selling() 
        {
            Offer();
            Cheque();
        }
        public void Offer() 
        {
            Console.WriteLine("Do you want to buy something? (yes or no)");
            cont = Convert.ToString(Console.ReadLine());
            if (cont == "yes") 
            {
                selled = true;
                do
                {
                    Console.WriteLine("Ok, choose the number of product. (1, 2, 3 or 4)");
                    product_num = Convert.ToDouble(Console.ReadLine());
                    if (product_num == 1)
                    {
                        sum = sum + 20;
                        Console.WriteLine("You bought bread.");
                        list[count2] = "Bread";
                    }
                    else if (product_num == 2)
                    {
                        sum = sum + 15;
                        Console.WriteLine("You bought apple.");
                        list[count2] = "Apple";
                    }
                    else if (product_num == 3)
                    {
                        sum = sum + 30;
                        Console.WriteLine("You bought tomato.");
                        list[count2] = "Tomato";
                    }
                    else if (product_num == 4)
                    {
                        sum = sum + 45;
                        Console.WriteLine("You bought meat.");
                        list[count2] = "Meat";
                    }
                    else
                        Console.WriteLine("There is no such product like: " + product_num);
                    Console.WriteLine("Do you want to continue? (yes/no)");
                    cont = Convert.ToString(Console.ReadLine());
                    count2++;
                } while (cont == "yes");
            }
        }
        public void Cheque() 
        {
            if (selled == true) 
            {
                Console.WriteLine("Thank you for your purchase, here is your cheque:");
                for (int i = 0; i < count2; i++)
                {
                    Console.WriteLine(list[i]);
                }
                Console.WriteLine("The total amount of all purchases is equal to: " + sum);
                Console.WriteLine("Have a nice day!");
            }
            else
                Console.WriteLine("Have a nice day!");
        }
    }
}
