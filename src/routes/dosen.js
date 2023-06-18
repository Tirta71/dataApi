const express = require("express");
const dosenController = require("../controller/dosen");
const routeDosen = express.Router();

// Get ALL Data
routeDosen.get("/", dosenController.getAllDosen);

routeDosen.get("/:idDosen", dosenController.getDataDosenById);

// Create Data
routeDosen.post("/", dosenController.createDataDosen);

// Update Data Dosen
routeDosen.patch("/:idDosen", dosenController.updateDataDosen);

routeDosen.delete("/:idDosen", dosenController.deleteDataDosen);

routeDosen.put("/:idDosen", dosenController.putDataDosen);

module.exports = routeDosen;
