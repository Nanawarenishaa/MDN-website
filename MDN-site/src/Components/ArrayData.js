const ArrayData = [
  {
    mainPoint: "Introduction",
    subPoints: [
      { 
        title: "What is SQL?", 
        content: {
          heading: "What is SQL?",
          description: "SQL stands for Structured Query Language. It is used to communicate with databases.",
          details: "SQL is used to perform various operations such as querying, updating, and managing data within relational databases. It is essential for interacting with databases and is used by many database management systems such as MySQL, PostgreSQL, and SQL Server."
        }
      },
      { 
        title: "History of SQL", 
        content: {
          heading: "History of SQL",
          description: "SQL was initially developed at IBM by Donald D. Chamberlin and Raymond F. Boyce.",
          details: "The language was developed in the 1970s and has since become the standard language for relational database management systems. SQL was standardized by the American National Standards Institute (ANSI) in 1986 and by the International Organization for Standardization (ISO) in 1987."
        }
      }
    ]
  },
  {
    mainPoint: "Basic Concepts",
    subPoints: [
      { 
        title: "Data Types", 
        content: {
          heading: "Data Types",
          description: "SQL supports various data types for storing different kinds of data.",
          details: "Common data types include INTEGER, VARCHAR, DATE, and BOOLEAN. Choosing the correct data type is crucial for the efficiency and integrity of database operations."
        }
      },
      { 
        title: "Tables", 
        content: {
          heading: "Tables",
          description: "Tables are the fundamental building blocks of a database.",
          details: "A table consists of rows and columns, where each column represents a data field and each row represents a data record. Tables are used to store structured data in a database."
        }
      },
      { 
        title: "Primary Keys", 
        content: {
          heading: "Primary Keys",
          description: "A primary key is a unique identifier for a record in a table.",
          details: "Primary keys ensure that each record in a table is unique. They are essential for maintaining data integrity and establishing relationships between tables."
        }
      }
    ]
  },
  {
    mainPoint: "Advanced Topics",
    subPoints: [
      { 
        title: "Joins", 
        content: {
          heading: "Joins",
          description: "SQL JOIN is used to combine rows from two or more tables, based on a related column between them.",
          details: "There are several types of joins, including INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL OUTER JOIN, each serving different purposes. Joins are crucial for querying data from multiple tables efficiently."
        }
      },
      { 
        title: "Indexes", 
        content: {
          heading: "Indexes",
          description: "Indexes are used to retrieve data from the database more quickly than otherwise.",
          details: "Indexes are created on columns to speed up data retrieval and are essential for performance tuning in large databases. They work similarly to an index in a book, allowing quick access to data."
        }
      },
      { 
        title: "Stored Procedures", 
        content: {
          heading: "Stored Procedures",
          description: "A stored procedure is a set of SQL statements that can be executed as a program.",
          details: "Stored procedures allow for reusable SQL code, improve performance, and enhance security by encapsulating complex operations. They can take parameters and return results, making them powerful tools for database management."
        }
      }
    ]
  },
  {
    mainPoint: "SQL Functions",
    subPoints: [
      { 
        title: "Aggregate Functions", 
        content: {
          heading: "Aggregate Functions",
          description: "Aggregate functions perform a calculation on a set of values and return a single value.",
          details: "Common aggregate functions include COUNT(), SUM(), AVG(), MAX(), and MIN(). These functions are used in conjunction with the GROUP BY clause to perform calculations on groups of data."
        }
      },
      { 
        title: "String Functions", 
        content: {
          heading: "String Functions",
          description: "String functions manipulate string data.",
          details: "Examples of string functions include CONCAT(), LENGTH(), SUBSTRING(), and REPLACE(). These functions are used to perform operations such as concatenation, finding the length of a string, extracting substrings, and replacing parts of a string."
        }
      },
      { 
        title: "Date Functions", 
        content: {
          heading: "Date Functions",
          description: "Date functions perform operations on date and time data.",
          details: "Common date functions include NOW(), DATE_ADD(), DATE_SUB(), and DATE_FORMAT(). These functions are used to retrieve the current date and time, add or subtract intervals from dates, and format dates in different ways."
        }
      }
    ]
  },
  {
    mainPoint: "Data Manipulation",
    subPoints: [
      { 
        title: "INSERT", 
        content: {
          heading: "INSERT",
          description: "The INSERT statement is used to add new records to a table.",
          details: "You can insert a single record or multiple records at once. Syntax: INSERT INTO table_name (column1, column2, ...) VALUES (value1, value2, ...)."
        }
      },
      { 
        title: "UPDATE", 
        content: {
          heading: "UPDATE",
          description: "The UPDATE statement is used to modify existing records in a table.",
          details: "You can update specific records based on a condition. Syntax: UPDATE table_name SET column1 = value1, column2 = value2, ... WHERE condition."
        }
      },
      { 
        title: "DELETE", 
        content: {
          heading: "DELETE",
          description: "The DELETE statement is used to remove existing records from a table.",
          details: "You can delete specific records based on a condition. Syntax: DELETE FROM table_name WHERE condition. Use caution as deleting records cannot be undone."
        }
      }
    ]
  }
];

export default ArrayData;
