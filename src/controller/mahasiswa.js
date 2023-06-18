const modelMahasiswa = require("../models/mahasiswa");

const getAllMahasiswa = async (req, res) => {
  try {
    const [data] = await modelMahasiswa.getAllMahasiswa();
    res.json({
      message: "Get All Data Mahasiswa",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to Get Data Mahasiswa",
      serverMessage: error.message,
    });
  }
};

const getDataId = async (req, res) => {
  const { idMahasiswa } = req.params;

  try {
    const [data] = await modelMahasiswa.getDataId(idMahasiswa);

    if (data.length === 0) {
      return res.status(404).json({
        message: "Data not found",
        data: null,
      });
    }

    res.json({
      message: "Get Data by ID",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to get data",
      serverMessage: error.message,
    });
  }
};

const createAllMahasiswa = async (req, res) => {
  const { body } = req;
  try {
    await modelMahasiswa.createMahasiswa(body);
    res.json({
      message: "Create New mahasiswa Success",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed make Data",
      serverMessage: error,
    });
  }
};

const updateMahasiswa = async (req, res) => {
  const { idMahasiswa } = req.params;
  const { body } = req;
  try {
    await modelMahasiswa.updateMahasiswa(body, idMahasiswa);
    res.json({
      message: "berhasil update",
      data: {
        id: idMahasiswa,
        ...body,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Data Gagal di update",
      messageError: error,
    });
  }
};

const deleteMahasiswa = async (req, res) => {
  const { idMahasiswa } = req.params;

  try {
    await modelMahasiswa.deleteMahasiswa(idMahasiswa);
    res.json({
      message: "Data berhasil dihapus",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      message: "Gagal menghapus data",
      errorMessage: error.message,
    });
  }
};

module.exports = {
  getAllMahasiswa,
  createAllMahasiswa,
  updateMahasiswa,
  deleteMahasiswa,
  getDataId,
};
