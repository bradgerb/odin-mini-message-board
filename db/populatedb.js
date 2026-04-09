#! /usr/bin/env node

require('dotenv').config();

const { Client } = require("pg");

const connection_string = process.env.connection_string;

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  message VARCHAR ( 255 ),
  username VARCHAR ( 255 ),
  date DATE
);

INSERT INTO messages (message, username, date) 
VALUES
  ('Hi there!', 'Amando', CURRENT_DATE),
  ('Hello World!', 'Charles', CURRENT_DATE);
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: connection_string,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();

// # populating local db 
// node db/populatedb.js <local-db-url>
//<local-db-url> = postgres://username:password@localhost:5432/database_name

// # populating production db
// # run it from your machine once after deployment of your app & db
// node db/populatedb.js <production-db-url>
