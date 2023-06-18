require("dotenv").config();
const PORT = process.env.PORT || 5000;

const express = require("express");
const app = express();

// ROUTE
const userRoute = require("./routes/user.js");
const mahasiswaRoute = require("./routes/mahasiswa.js");
const dosenRoute = require("./routes/dosen");
const barangRoute = require("./routes/barang");

const middlewareLogRequset = require("./midleware/logs");

app.use(middlewareLogRequset);
app.use(express.json());

app.use("/user", userRoute);
app.use("/mahasiswa", mahasiswaRoute);
app.use("/dosen", dosenRoute);
app.use("/barang", barangRoute);

app.listen(PORT, () => {
  console.log(`Server berhasil dijalankan pada port, ${PORT}`);
});
