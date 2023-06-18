const modelBarang = require("../models/barang");

const getAllDataBarang = async (req, res) => {
  try {
    const [data] = await modelBarang.getAllDataBarang();
    res.json({
      message: "berhasil dapat data barang",
      data: data,
    });
  } catch (error) {
    res.send(error);
  }
};

const getDataById = async (req, res) => {
  const { idBarang } = req.params;

  try {
    const [data] = await modelBarang.getAllDataById(idBarang);

    data.length === 0
      ? res.status(404).send("data tidak ditemukan")
      : res.json({
          message: "Get Data by id",
          data: data,
        });
  } catch (error) {
    res.status(500).send(error);
  }
};

const createDataBarang = async (req, res) => {
  const { body } = req;

  try {
    await modelBarang.createDataBarang(body);
    res.json({
      message: "Create data sucessfull",
      data: body,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteBarang = async (req, res) => {
  const { idBarang } = req.params;

  try {
    const [data] = await modelBarang.getAllDataBarang(idBarang);
    const deleteBarang = await modelBarang.deleteBarang(idBarang);

    if (data !== deleteBarang) {
      res.json({
        message: "erooooooooooooor",
      });
    } else {
      res.json({
        message: "Delete barang success",
        data: null,
      });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getAllDataBarang,
  createDataBarang,
  deleteBarang,
  getDataById,
};
