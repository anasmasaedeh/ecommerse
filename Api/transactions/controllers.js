const User =require("../user/userModel")
const Product=require("../products/productModel")
 const Transaction=require("./transactionModel")
const transactionsService = require('./services');

const createTransactionController = async (req, res) => {
  try {
    const user = await User.findByPk(req.body.userId);
    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    const product = await Product.findByPk(req.body.productId);
    if (!product) {
      return res.status(400).json({ error: 'Product not found' });
    }

    const transaction = await transactionsService.createTransaction({
      ...req.body,
      UserId: user.id,
      ProductId: product.id,
    });

    return res.status(201).json({ transaction });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getTransactionByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const transaction = await transactionsService.getTransactionById(id);
    if (!transaction) {
      return res.status(404).send({ message: 'Transaction not found' });
    }
    res.send(transaction);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const getTransactionsController = async (req, res) => {
  try {
    const transactions = await Transaction.findAll();

    return res.status(200).json({ transactions });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const updateTransactionStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const id = req.params.id;
    const updatedTransaction = await transactionsService.updateTransactionStatus(id, status);
    return res.status(200).json({
      message: 'Transaction status updated successfully',
      data: updatedTransaction,
    });
  } catch (error) {
    return res.status(400).json({
      message: 'Transaction status update failed',
      error: error.message,
    });
  }
};


module.exports = {
  createTransactionController,
  getTransactionByIdController,
  getTransactionsController,
  updateTransactionStatus
};
