const express = require("express");
const mahasiswaController = require("../controller/mahasiswa.js");
const routeMahasiswa = express();

// READ-DATA
routeMahasiswa.get("/", mahasiswaController.getAllMahasiswa);

// READ-DATA BY ID
routeMahasiswa.get("/:idMahasiswa", mahasiswaController.getDataId);
// POST DATA
routeMahasiswa.post("/", mahasiswaController.createAllMahasiswa);

// UPDATE DATA
routeMahasiswa.patch("/:idMahasiswa", mahasiswaController.updateMahasiswa);

// DELETE DATA
routeMahasiswa.delete("/:idMahasiswa", mahasiswaController.deleteMahasiswa);
module.exports = routeMahasiswa;
