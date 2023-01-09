const Sequelize = require('sequelize');
const sequelize = new Sequelize('myDb', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  nationality: {
    type: Sequelize.STRING,
    allowNull: false
  },
  phoneNumber:{
    type: Sequelize.INTEGER,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = {User};
  