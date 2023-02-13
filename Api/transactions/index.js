const express = require('express');
const Router = express.Router();
const transactionController = require('./controllers');

Router.post('/transactions', transactionController.createTransactionController);
Router.get('/transactions/:id', transactionController.getTransactionByIdController);
Router.get('/transactions', transactionController.getTransactionsController);
Router.patch('/transactions/:id', transactionController.updateTransactionStatus);


module.exports = Router;
