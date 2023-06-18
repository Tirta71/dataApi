const userModels = require("../models/user");

const getAllUser = async (req, res) => {
  try {
    const [data] = await userModels.getAllUser();
    res.json({
      message: "Get All user access",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const [data] = await userModels.getUserById(id);

    if (data.length === 0) {
      res.status(404).json({
        message: "data tidak ditemukan",
        data: null,
      });
    }
    res.json({
      message: "Get User By Id",
      data: data,
    });
  } catch (error) {
    res.json({
      message: "Data Tidak ditemukan",
      errorMessage: error,
    });
  }
};

const createNewUser = async (req, res) => {
  const { body } = req;
  if (!body.email || !body.name || !body.address) {
    return res.status(400).json({
      message: "anda mengirim data yang salah atau tidak lengkap",
      data: null,
    });
  }
  try {
    await userModels.createNewUser(body);
    res.json({
      message: "Create New user Sucess",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "data gagal di buat",
    });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  try {
    await userModels.updateUser(body, id);

    res.json({
      message: "Success Update User ",
      data: {
        id: id,
        ...body,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Data Gagal di update",
    });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    await userModels.deleteUser(id);
    res.json({
      message: "delete User success",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      message: "Data Gagal di Hapus",
    });
  }
};

module.exports = {
  getAllUser,
  createNewUser,
  updateUser,
  deleteUser,
  getUserById,
};
