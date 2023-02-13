const Transaction = require('./transactionModel');
const User = require('../user/userModel');
const Product = require('../products/productModel');

// services/transactions.js

const createTransaction = async (data) => {
  const transaction = await Transaction.create(data);
  return transaction;
};

const getTransactionById = async (id) => {
  const transaction = await Transaction.findByPk(id, {
    include: [
      { model: User, attributes: ['id'] },
      { model: Product, attributes: ['id'] },
    ],
  });
  return transaction;
};

const getTransactions = async () => {
  const transactions = await Transaction.findAll();
  return transactions;
};
const updateTransactionStatus = async (id, status) => {
  try {
    const transaction = await Transaction.findByPk(id);
    if (!transaction) {
      throw new Error(`Transaction with id ${id} not found`);
    }
    const updatedTransaction = await transaction.update({ status: status });
    return updatedTransaction;
  } catch (error) {
    throw error;
  }
};


module.exports = {
  createTransaction,
  getTransactionById,
  getTransactions,
  updateTransactionStatus
};

  
  
