const Sequelize = require('sequelize');
const Category=require('../categories/categModel')
const sequelize = new Sequelize('myDb', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql'
  });
  const Product = sequelize.define('product', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },    
    name: {
      type: Sequelize.STRING,
      allowNull:false
    },
    description: {
      type: Sequelize.TEXT
    },
    price: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false

    },
    image_url: {
        type: Sequelize.STRING
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,

        references: {
          model: 'categories',
          key: 'id'
        }
      }
        
  });

 Product.belongsTo(Category);
  Category.hasMany(Product);
  module.exports = Product;
