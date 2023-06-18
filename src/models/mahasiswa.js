const dBpool2 = require("../config/database");

const getAllMahasiswa = () => {
  const sqlQuery = "SELECT * FROM mahasiswa";

  return dBpool2.execute(sqlQuery);
};

const getDataId = (idMahasiswa) => {
  const sqlQuery = `SELECT * FROM mahasiswa WHERE id = ${idMahasiswa}`;

  return dBpool2.execute(sqlQuery);
};

const createMahasiswa = (body) => {
  const sqlQuery = `INSERT INTO mahasiswa (nim,nama,kelas)
                    VALUE ("${body.nim}", "${body.nama}", "${body.kelas}")`;
  return dBpool2.execute(sqlQuery);
};

const updateMahasiswa = (body, idMahasiswa) => {
  const sqlQuery = `UPDATE mahasiswa
                           SET nim="${body.nim}",nama="${body.nama}",kelas="${body.kelas}"
                           WHERE id=${idMahasiswa}`;
  return dBpool2.execute(sqlQuery);
};

const deleteMahasiswa = (idMahasiswa) => {
  const sqlQuery = `DELETE FROM mahasiswa WHERE id=${idMahasiswa}`;
  return dBpool2.execute(sqlQuery);
};

module.exports = {
  getAllMahasiswa,
  createMahasiswa,
  updateMahasiswa,
  deleteMahasiswa,
  getDataId,
};
