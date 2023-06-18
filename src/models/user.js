const dBpool = require("../config/database");

const getAllUser = () => {
  const sqlQuery = "SELECT * FROM user";

  return dBpool.execute(sqlQuery);
};

const getUserById = (id) => {
  const sqlQuery = `SELECT * FROM user WHERE id='${id}'`;
  return dBpool.execute(sqlQuery);
};

const createNewUser = (body) => {
  const sqlQuery = `INSERT INTO user (name,email,address) 
                    VALUE ("${body.name}", "${body.email}", "${body.address}")`;
  return dBpool.execute(sqlQuery);
};

const updateUser = (body, id) => {
  const sqlQuery = `UPDATE user 
                      SET name="${body.name}",email="${body.email}",address="${body.address}" 
                      WHERE id=${id}`;
  return dBpool.execute(sqlQuery);
};
const deleteUser = (id) => {
  const sqlQuery = `DELETE FROM user WHERE id=${id}`;
  return dBpool.execute(sqlQuery);
};
module.exports = {
  getAllUser,
  createNewUser,
  updateUser,
  deleteUser,
  getUserById,
};
