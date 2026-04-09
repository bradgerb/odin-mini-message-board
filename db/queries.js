const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function insertMessage(message, username, date) {
    console.log(message);
    console.log(username);
    console.log(date);
  await pool.query("INSERT INTO messages (message, username, date) VALUES ($1, $2, $3)", [message, username, date]);
}

module.exports = {
  getAllMessages,
  insertMessage
};


