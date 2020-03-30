---
layout: post
title: SQLite Basics
categories: Database
comments: true
image: sqlite.png 
description: SQLite commands 
---
SQlite is a software library providing Relational Database Management System.
It is: Serverless (Is integrated with application and doesn't require a server),
<!--continue-->  
<br>
Self-Contained (Is developed using ANSI-C, and requires minimal support from OS or external library),<br>

Zero-Configuration (No configuration files are used),<br>
Transactional (All transactions are ACID-compliant)<br>


<br>
Other Distinctive features include:<br>
<li>Uses dynamic types of tables</li>
<li>Allows single database connection to access multiple database files simultaneously.</li>
<li>Creates in-memory databases</li>
<br>


<h3>SQlite Commands</h3>
<pre>
  $sqlite3  //start the sqlite3 connection
  $sqlite3 FILENAME   //creates db file during connection if not exists 
  sqlite>.open PATH_TO/FILENAME   //open a database file
  sqlite>.help  //lists all available commands
  sqlite>.database      //shows databases in current connection
  sqlite>attach database "PATH_TO/FILENAME" as FILENAME  //adds additional db to current connection
  sqlite>.tables    //lists all the tables
  sqlite>.table '%ab'   //shows tables with ab string
  sqlite>.schema    //shows structure of all tables
  sqlite>.schema TABLENAME  //shows structure of specified table
  sqlite>.fullschema    
  sqlite>.indexes   //shows all indexes of current database
  sqlite>.indexes TABLENAME
  sqlite>.indexes '%ab'
  sqlite>.output FILENAME   //saves result of subsequent queries into FILENAME
  sqlite>.once FILENAME     //saves result of  next query only
  sqlite>.mode MODENAME     
  sqlite>.read PATH_TO_FILE/FILENAME    //execute query from external FILEclea
  sqlite>.quit     //quits the sqlite3 program
</pre>

SQLite SELECT statement
<pre>SELECT DISTINCT column_name FROM table_name
JOIN table ON join_condition
WHERE row_filter
ORDER BY column
LIMIT count 
GROUP BY column
HAVING group_filter;

SELECT column1, column2 FROM table_name;
SELECT * from table_name;
</pre>