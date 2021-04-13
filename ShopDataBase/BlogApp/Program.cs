using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace BlogApp
{
    class Program
    {
        private static string _connectionString = @"Server=DESKTOP-7MTHGV7\SQLEXPRESS;Database=BlogSystem;Trusted_Connection=True;";

        static void Main( string[] args )
        {
            string Operation;
            Console.WriteLine("Введите операцию: ");
            Operation = Convert.ToString(Console.ReadLine());
            if (Operation == "showstats")
            {
                List<Statistics> statistics = ShowStatistics();
                foreach (Statistics statistic in statistics)
                {
                    Console.WriteLine("Ф.И.О.: " + statistic.Name);
                    Console.WriteLine("Количество заказов: " + statistic.NumberOfOrders);
                    Console.WriteLine("Общая стоимость покупок: " + statistic.SumOfOrders);
                    Console.WriteLine();
                }
            }
            else if (Operation == "update")
            {
                Update();
            }
            else if (Operation == "delete")
            {
                Delete();
            }
            else if (Operation == "insert")
            {
                int createdOrderId = InsertOrder();
                Console.WriteLine("Created post: " + createdOrderId);
            }
            else
                Console.WriteLine("Несуществующая операция: " + Operation);
        }

        private static List<Statistics> ShowStatistics()
        {
            List<Statistics> statistics = new List<Statistics>();
            using ( SqlConnection connection = new SqlConnection( _connectionString ) )
            {
                connection.Open();
                using ( SqlCommand command = new SqlCommand() )
                {
                    command.Connection = connection;
                    command.CommandText =
                        @"SELECT
	                        [Customer].[Name] AS [Name],
                            COUNT([Order].[OrderId]) AS [NumberOfOrders],
	                        SUM([Order].[Price]) AS [SumOfOrders]
                          FROM [Customer]
                          LEFT JOIN [ORDER]
                          ON [Customer].[CustomerId] = [Order].[CustomerId]
                          GROUP BY [Customer].[CustomerId], [Customer].[Name];";

                    using ( SqlDataReader reader = command.ExecuteReader() )
                    {
                        while ( reader.Read() )
                        {
                            var statistic = new Statistics
                            {
                                Name = Convert.ToString(reader["Name"]),
                                NumberOfOrders = Convert.ToInt32(reader["NumberOfOrders"]),
                                SumOfOrders = Convert.ToInt32(reader["SumOfOrders"]),
                            };
                            statistics.Add( statistic );
                        }
                    }
                }
            }
            return statistics;
        }

        private static void Update()
        {
            int OrderId;
            string ProductName;
            int Price;
            int CustomerId;
            Console.WriteLine("Укажите Id заказа:");
            OrderId = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Укажите параметры которые вы хотете обновить (ProductName, Price, CustomerId соответственно:)");
            ProductName = Convert.ToString(Console.ReadLine());
            Price = Convert.ToInt32(Console.ReadLine());
            CustomerId = Convert.ToInt32(Console.ReadLine());
            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                connection.Open();
                using (SqlCommand command = connection.CreateCommand())
                {
                    command.CommandText = @"
                        UPDATE [Order]
                        SET [ProductName] = @productname,
                            [Price] = @price,
                            [CustomerId] = @customerId
                        WHERE OrderId = @orderId";

                    command.Parameters.Add("@orderId", SqlDbType.BigInt).Value = OrderId;
                    command.Parameters.Add("@productname", SqlDbType.NVarChar).Value = ProductName;
                    command.Parameters.Add("@price", SqlDbType.Int).Value = Price;
                    command.Parameters.Add("@customerId", SqlDbType.Int).Value = CustomerId;

                    command.ExecuteNonQuery();
                }
            }
        }

        private static void Delete()
        {          
            string ProductName;
            int CustomerId;
            Console.WriteLine("Введите Id покупателя и продукт который хотите удалить из заказа соответственно");
            CustomerId = Convert.ToInt32(Console.ReadLine());
            ProductName = Convert.ToString(Console.ReadLine());
            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                connection.Open();
                using (SqlCommand command = connection.CreateCommand())
                {
                    command.CommandText = @"
                        DELETE FROM [Order]
                        WHERE [ProductName] = @productname
                        AND [CustomerId] = @customerId";
                    command.Parameters.Add("@productname", SqlDbType.NVarChar).Value = ProductName;
                    command.Parameters.Add("@customerId", SqlDbType.Int).Value = CustomerId;

                    command.ExecuteNonQuery();
                }
            }
        }

        private static int InsertOrder()
        {
            string ProductName;
            int Price;
            int CustomerId;
            Console.WriteLine("Введите наименование продукта, цену, и Id покупателя, соответственно");
            ProductName = Convert.ToString(Console.ReadLine());
            Price = Convert.ToInt32(Console.ReadLine());
            CustomerId = Convert.ToInt32(Console.ReadLine());
            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                connection.Open();
                using (SqlCommand cmd = connection.CreateCommand())
                {
                    cmd.CommandText = @"
                    INSERT INTO [Order]
                       ([ProductName],
                        [Price],
                        [CustomerId]) 
                    VALUES 
                       (@productname,
                        @price,
                        @customerId)
                    SELECT SCOPE_IDENTITY()";

                    cmd.Parameters.Add("@productname", SqlDbType.NVarChar).Value = ProductName;
                    cmd.Parameters.Add("@price", SqlDbType.Int).Value = Price;
                    cmd.Parameters.Add("@customerId", SqlDbType.Int).Value = CustomerId;

                    return Convert.ToInt32(cmd.ExecuteScalar());
                }
            }
        }
    }
}
