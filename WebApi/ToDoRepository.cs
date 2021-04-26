using System;
using System.Collections.Generic;
using System.Linq;
using WebApi.Dto;
using System.Data;
using System.Data.SqlClient;


namespace WebApi
{
    public class ToDoRepository
    {
        private static string _connectionString = @"Server=DESKTOP-O72CJ3L\SQLEXPRESS;Database=ToDo;Trusted_Connection=True;";
        private class ToDo
        {
            public ToDo( int id, string name, bool done)
            {
                Id = id;
                Name = name;
                Done = done;
                CreationDate = DateTime.Now;
            }

            public int Id { get; }
            public string Name { get; set; }
            public bool Done { get; set; }
            public DateTime CreationDate { get; }
        }

        private static List<ToDo> Database = new List<ToDo>();
        private int GetId() => Database.Count > 0 ? Database.Max( x => x.Id ) + 1 : 1;

        public List<ToDoDto> GetAll() => Database.Select( x => new ToDoDto { Id = x.Id, Name = x.Name, Done = x.Done } ).ToList();
        public int Add(ToDoDto toDoDto) {
            int id = GetId();
            Database.Add(new ToDo(GetId(), toDoDto.Name, toDoDto.Done));
            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                connection.Open();
                using (SqlCommand cmd = connection.CreateCommand())
                {
                    cmd.CommandText = @"
                    INSERT INTO [ToDo]
                       ([Task]) 
                    VALUES 
                       (@task)";

                    cmd.Parameters.Add("@task", SqlDbType.NVarChar).Value = toDoDto.Name;

                    return Convert.ToInt32(cmd.ExecuteScalar());
                }
            }    
        }
        public void Update( int id, ToDoDto toDoDto ) {
            ToDo todo = Database.FirstOrDefault( x => x.Id == id );
            if ( todo == null ) return;
            todo.Name = toDoDto.Name;
            todo.Done = toDoDto.Done;
        }
    }
}
