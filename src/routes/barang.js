const express = require("express");
const routeBarang = express.Router();
const controllerBarang = require("../controller/barang");

routeBarang.get("/", controllerBarang.getAllDataBarang);
routeBarang.post("/", controllerBarang.createDataBarang);
routeBarang.delete("/:idBarang", controllerBarang.deleteBarang);

routeBarang.get("/:idBarang", controllerBarang.getDataById);
module.exports = routeBarang;
