const express = require('express');
const path=require('path');
const mysql=require('mysql2')
const bodyParser = require('body-parser');
const seq = require('./sequelize');
const router = require('./Api/user/index');
const app = express();
console.log("************************\n server is running \n *********************")
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

seq();
app.use(express.static("public"));
app.use("/api",router)


app.listen(3030);