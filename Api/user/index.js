const express = require('express');
const router = express.Router();
const {authenticate}=require('../services')
const {
  createUser,
  getUsers,
  getUserById,
  updateUserById,
  deleteUserById
} = require('./controller');

router.post('/users', createUser);
router.get('/users',getUsers);
router.get('/users/:id', authenticate, getUserById);
router.put('/users/:id', authenticate, updateUserById);
router.delete('/users/:id', deleteUserById);

module.exports = router;
