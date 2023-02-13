const Sequelize = require('sequelize');
const Product=require('../products/productModel')
const User=require('../user/userModel')
const sequelize = new Sequelize('myDb', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql'
  });
  const Transaction = sequelize.define('Transaction', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    quantity: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    date: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
    status: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });
    //sequelize.sync()
  //.then(() => {
    //console.log('Tables created!');
  //});

  Transaction.belongsTo(User);
  Transaction.belongsTo(Product);
  User.hasMany(Transaction);
  Product.hasMany(Transaction);
  
    module.exports=Transaction;