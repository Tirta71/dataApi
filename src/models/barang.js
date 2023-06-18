const dBBarang = require("../config/database");

const getAllDataBarang = () => {
  const sqlQuery = "SELECT * FROM barang";
  return dBBarang.execute(sqlQuery);
};

const getAllDataById = (idBarang) => {
  const sqlQuery = `SELECT * FROM barang where id = ${idBarang}`;
  return dBBarang.execute(sqlQuery);
};

const createDataBarang = (body) => {
  const sqlQuery = `INSERT INTO barang (nama_barang,harga_barang,jumlah_barang)
    VALUE ("${body.nama_barang}" , "${body.harga_barang}", "${body.jumlah_barang}")`;

  return dBBarang.execute(sqlQuery);
};

const deleteBarang = (idBarang) => {
  const sqlQuery = `DELETE FROM barang where id = ${idBarang}`;

  return dBBarang.execute(sqlQuery);
};

const SelectBarang = (idBarang) => {
  const sqlQuery = `SELECT id FROM barang where id = ${idBarang}`;
  return dBBarang.execute(sqlQuery);
};

module.exports = {
  getAllDataBarang,
  createDataBarang,
  deleteBarang,
  SelectBarang,
  getAllDataById,
};
