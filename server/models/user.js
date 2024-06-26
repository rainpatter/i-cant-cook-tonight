const db = require('../db')

function findByEmailOrUsername(userInfo) {
  let sql = `
  SELECT * FROM users WHERE email = $1
  OR username = $1;`

  return db.query(sql, [userInfo]).then(res => {
    if (res.rowCount === 0) {
      let err = new Error('resource not found')
      err.status = 404
      throw err
    }
    return res.rows[0]
  })

}

const User = {
  findByEmailOrUsername
}

module.exports = User
