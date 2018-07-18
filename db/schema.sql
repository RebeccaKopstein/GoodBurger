DROP DATABASE IF EXISTS goodburgers_db;

CREATE DATABASE goodburgers_db;

   USE goodburgers_db;
   
   CREATE TABLE burgers(
   id INT auto_increment, 
   burger_name VARCHAR(75),
   createdAt TIMESTAMP NOT NULL DEFAULT current_timestamp,
   devoured BOOLEAN,
   primary key (id)
   );
   
