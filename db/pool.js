const { Pool } = require("pg");

const dbUsername = process.env.dbUsername;
const dbPassword = process.env.dbPassword;
const dbName = process.env.dbName;
const port = process.env.port;

module.exports = new Pool({
  host: "localhost",
  user: `${dbUsername}`,
  database: `${dbName}`,
  password: `${dbPassword}`,
  port: `${port}`
});
