const dBDosen = require("../config/database");

const getAllDataDosen = () => {
  const sqlQuery = "SELECT * FROM dosen";

  return dBDosen.execute(sqlQuery);
};

const getDataDosenById = (idDosen) => {
  const sqlQuery = `SELECT * FROM dosen WHERE id = ${idDosen}`;
  return dBDosen.execute(sqlQuery);
};

const createDataDosen = (body) => {
  const sqlQuery = `INSERT INTO dosen (nid,namaDosen,mataKuliah)
                    VALUE ("${body.nid}" , "${body.namaDosen}", "${body.mataKuliah}")`;
  return dBDosen.execute(sqlQuery);
};

const updateDataDosen = (body, idDosen) => {
  const sqlQuery = `UPDATE dosen SET nid = "${body.nid}", namaDosen = "${body.namaDosen}", mataKuliah = "${body.mataKuliah}"
                    WHERE id = ${idDosen} `;
  return dBDosen.execute(sqlQuery);
};

const deleteDataDosen = (idDosen) => {
  const sqlQuery = `DELETE FROM dosen WHERE id = ${idDosen} `;
  return dBDosen.execute(sqlQuery);
};

const putDataDosen = (body, idDosen) => {
  const sqlQuery = `UPDATE dosen SET nid = "${body.nid}", namaDosen = "${body.namaDosen}", mataKuliah = "${body.mataKuliah}"
                    WHERE id = ${idDosen} `;
  return dBDosen.execute(sqlQuery);
};
module.exports = {
  getAllDataDosen,
  createDataDosen,
  updateDataDosen,
  deleteDataDosen,
  getDataDosenById,
  putDataDosen,
};
