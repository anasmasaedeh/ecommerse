const express = require('express');
const path=require('path');
const mysql=require('mysql2')
const bodyParser = require('body-parser');
const seq = require('./sequelize');
const router = require('./Api/user/index');
const route = require ('./Api/auth/index')
const cors = require("cors");
const Transaction = require('./Api/transactions/transactionModel');
const Router=require('./Api/transactions/index')
const routers=require('./Api/categories/index')
const routes=require('./Api/products/index')
const app = express();
  
app.use(cors());

console.log("************************\n server is running \n *********************")
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());

  
seq();
app.use(express.static("public"));
app.use("/api",router)
app.use("/user",route)
app.use("/api",routers)
app.use("/api",routes)
app.use("/api",Router)
app.listen(3000);