CREATE DATABASE goodburgers_db;

   USE goodburgers_db;
   
   CREATE TABLE burgers(
   id INT auto_increment, 
   burger_name VARCHAR(75),
   devoured BOOLEAN,
   primary key (id)
   );