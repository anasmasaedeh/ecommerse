const  Sequelize  = require('sequelize');
const sequelize = new Sequelize('myDb', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});
const Category = sequelize.define('category', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },    

    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
              allowNull: false
      },
  
  });
  module.exports = Category;
