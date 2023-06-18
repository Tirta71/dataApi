const modelDataDosen = require("../models/dosen");

const getAllDosen = async (req, res) => {
  try {
    const [data] = await modelDataDosen.getAllDataDosen(); // Mengambil data dari model Dosen (misalnya menggunakan fungsi getAllDataDosen() pada model)
    res.json({
      message: "Get All Data Dosen",
      data: data,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const getDataDosenById = async (req, res) => {
  const { idDosen } = req.params;
  try {
    const [data] = await modelDataDosen.getDataDosenById(idDosen);

    if (data.length === 0) {
      return res.status(404).json({
        message: "Data Not Found",
        data: null,
      });
    }
    res.json({
      message: `Get Data ID ${idDosen}`,
      data: data,
    });
  } catch (error) {
    res.json({
      message: `Failed to get ID ${idDosen}`,
      messageError: error,
    });
  }
};

const createDataDosen = async (req, res) => {
  const { body } = req;
  try {
    await modelDataDosen.createDataDosen(body);
    res.json({
      message: "Create SuccessFull",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed Craete Data ",
      messageError: error,
    });
  }
};

const updateDataDosen = async (req, res) => {
  const { idDosen } = req.params;
  const { body } = req;
  try {
    await modelDataDosen.updateDataDosen(body, idDosen);
    res.json({
      message: "Berhasil update Data ",
      data: idDosen,
      ...body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed Update Data ",
      messageError: error,
    });
  }
};

const deleteDataDosen = async (req, res) => {
  const { idDosen } = req.params;
  try {
    await modelDataDosen.deleteDataDosen(idDosen);
    res.json({
      message: "Berhasi Delete Data Dosen",
      data: null,
    });
  } catch (error) {
    res.status(500).send({
      message: "Failed Delete DaTA",
      messageError: error,
    });
  }
};

const putDataDosen = async (req, res) => {
  const { idDosen } = req.params;
  const { body } = req;

  try {
    await modelDataDosen.putDataDosen(body, idDosen);
    res.json({
      message: "Berhasil update Data",
      data: idDosen,
      ...body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update data",
      error: error.message,
    });
  }
};

module.exports = {
  getAllDosen,
  createDataDosen,
  updateDataDosen,
  deleteDataDosen,
  getDataDosenById,
  putDataDosen,
};
