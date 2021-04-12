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
            List<Statistics> statistics = ShowStatistics();
            foreach (Statistics statistic in statistics)
            {
                Console.WriteLine("Ф.И.О.: " + statistic.Name);
                Console.WriteLine("Количество заказов: " + statistic.NumberOfOrders);
                Console.WriteLine("Общая стоимость покупок: " + statistic.SumOfOrders);
                Console.WriteLine();
            }
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

    }
}
