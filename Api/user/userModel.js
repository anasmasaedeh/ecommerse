const Sequelize = require('sequelize');
const bcrypt= require('bcrypt')
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
    type: Sequelize.STRING,
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
}, {
  hooks: {
    beforeCreate: (user) => {
      return bcrypt.hash(user.password, 10).then((hash) => {
        user.password = hash;
      }).catch((error) => {
        throw new Error(error);
      });
    },
    beforeUpdate: (user) =>{
      if(user.password)
      return bcrypt.hash(user.password, 10).then((hash) => {
        user.password = hash;
      }).catch((error) => {
        throw new Error(error);
      });


    }
  }

});

//User.sync({ alter: true });

module.exports = User;
  