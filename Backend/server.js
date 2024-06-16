require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const db = require("./config/db");
const authRoutes = require("./routes/auth");
const helpRoutes = require("./routes/help");
const operasionalRoutes = require("./routes/operasional");
const hasilpanenRoutes = require("./routes/hasilpanen");
const keuanganRoutes = require("./routes/keuangan");

const app = express();

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use("/auth", authRoutes);
app.use("/helps", helpRoutes);
app.use("/operasional", operasionalRoutes);
app.use("/hasilpanen", hasilpanenRoutes);
app.use("/keuangan", keuanganRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the authentication API");
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
