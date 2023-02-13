const productServices = require('./services')

const createProduct = async (req, res) => {
  try {
    const newProduct = await productServices.createProduct(req.body);
    res.status(201).json({ message: 'Product created successfully', data: newProduct });
  } catch (error) {
    res.status(500).json({ message: 'Error creating product', error });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await productServices.getAllProducts();
    res.status(200).json({ data: products });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving products', error });
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productServices.getProductById(id);
    if (!product) throw new Error('Product not found');
    res.status(200).json({ data: product });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving product', error });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await productServices.updateProduct(id, req.body);
    if (updated) {
      const updatedProduct = await productServices.getProductById(id);
      return res.status(200).json({ message: 'Product updated successfully', data: updatedProduct });
    }
    throw new Error('Product not found');
  } catch (error) {
    res.status(500).json({ message: 'Error updating product', error });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await productServices.deleteProduct(id);
    if (deleted) {
      return res.status(200).json({ message: 'Product deleted successfully' });
    }
    throw new Error('Product not found');
  } catch (error) {
    res.status(500).json({ message: 'Error deleting product', error });
  }

};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct
};
