const Product = require('./productModel');

const createProduct = async (productData) => {
    return await Product.create(productData);
};

const getAllProducts = async () => {
    return await Product.findAll();
};

const getProductById = async (id) => {
    return await Product.findByPk(id);
};

const updateProduct = async (id, productData) => {
    return await Product.update(productData, { where: { id } });
};

const deleteProduct = async (id) => {
    return await Product.destroy({ where: { id } });
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct
};
