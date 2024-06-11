const { Sequelize, DataTypes } = require("sequelize");

// Inisialisasi koneksi Sequelize ke MySQL
const sequelize = new Sequelize("aquacare", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

const User = sequelize.define("users", {
  // Mengubah definisi tabel menjadi 'users'
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

sequelize
  .sync()
  .then(() => {
    console.log("Users table created (if not exist)");
  })
  .catch((err) => {
    console.error("Error creating users table:", err);
  });

module.exports = User;
