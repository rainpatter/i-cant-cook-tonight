const db = require("./index.js");
const bcrypt = require("bcrypt");
const plainTextPassword = "test";
const saltRounds = 10;

let usersArray = [
  { username: "georgia", email: "gs@example.com" },
  { username: "alice94", email: "alice94@example.com" },
  { username: "bob_jones", email: "bob.jones@example.com" },
  { username: "carol.smith", email: "carol.smith@example.com" },
  { username: "david.green", email: "david.green@example.com" },
  { username: "emily87", email: "emily87@example.com" },
  { username: "frank_thomas", email: "frank.thomas@example.com" },
  { username: "grace_walker", email: "grace.walker@example.com" },
  { username: "henry_king", email: "henry.king@example.com" },
  { username: "isabella03", email: "isabella03@example.com" },
  { username: "jack_smith", email: "jack.smith@example.com" },
  { username: "kate.miller", email: "kate.miller@example.com" },
  { username: "liam_jones", email: "liam.jones@example.com" },
  { username: "megan89", email: "megan89@example.com" },
  { username: "nathan.brown", email: "nathan.brown@example.com" },
  { username: "olivia.green", email: "olivia.green@example.com" },
  { username: "peter_parker", email: "peter.parker@example.com" },
  { username: "quinn_taylor", email: "quinn.taylor@example.com" },
  { username: "rachel.smith", email: "rachel.smith@example.com" },
  { username: "samuel94", email: "samuel94@example.com" },
  { username: "tina_wang", email: "tina.wang@example.com" },
];

const sql = `
    INSERT INTO users(
        username, email, password_digest
    )
        VALUES (
        $1, $2, $3)
    RETURNING *
    ;
  `;

async function seedDatabase() {
  for (user of usersArray) {
    try {
      console.log(user.username);
      let salt = await bcrypt.genSalt(saltRounds);
      let hash = await bcrypt.hash(plainTextPassword, salt);
      let result = await db.query(sql, [user.username, user.email, hash]);
    } catch (err) {
      console.log(err);
    }
  }
}

seedDatabase();
