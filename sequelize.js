const Sequelize = require('sequelize');

   const seq = () =>{
    const sequelize = new Sequelize('myDb', 'root', 'password', {
      host: 'localhost',
port:3306,
   dialect: 'mysql'
 });
sequelize.authenticate().then(()=>{
   console.log("connected")
})
   }

   module.exports=seq;