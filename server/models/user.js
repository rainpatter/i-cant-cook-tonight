const db = require("../db");
const bcrypt = require("bcrypt");

function findByEmailOrUsername(userInfo) {
  let sql = `
  SELECT * FROM users WHERE email = $1
  OR username = $1;`;

  return db.query(sql, [userInfo]).then((res) => {
    if (res.rowCount === 0) {
      let err = new Error("resource not found");
      err.status = 404;
      throw err;
    }
    return res.rows[0];
  });
}

async function createUser(username, email, plainTextPassword) {
  const saltRounds = 10;

  let sql = `
     INSERT INTO users(
        username, email, password_digest
    )
        VALUES (
        $1, $2, $3)
    RETURNING *
    ;
  `;
  try {
    let salt = await bcrypt.genSalt(saltRounds);
    let hash = await bcrypt.hash(plainTextPassword, salt);
    let result = await db.query(sql, [username, email, hash]);
    return result.rows[0];
  } catch (err) {
    console.log(err);
  }
}

const User = {
  findByEmailOrUsername,
  createUser,
};

module.exports = User;
