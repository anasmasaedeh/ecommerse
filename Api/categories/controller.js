const categoryServices = require('./services')

const createCategory = async (req, res) => {
  try {
    const newCategory = await categoryServices.createCategory(req.body);
    res.status(201).json({ message: 'Category created successfully', data: newCategory });
  } catch (error) {
    res.status(500).json({ message: 'Error creating category', error });
  }
};

const getAllCategories = async (req, res) => {
  try {
    const categories = await categoryServices.getAllCategories();
    res.status(200).json({ data: categories });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving categories', error });
  }
};

const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await categoryServices.getCategoryById(id);
    if (!category) throw new Error('Category not found');
    res.status(200).json({ data: category });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving category', error });
  }
};

const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await categoryServices.updateCategory(id, req.body);
    if (updated) {
      const updatedCategory = await categoryServices.getCategoryById(id);
      return res.status(200).json({ message: 'Category updated successfully', data: updatedCategory });
    }
    throw new Error('Category not found');
  } catch (error) {
    res.status(500).json({ message: 'Error updating category', error });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await categoryServices.deleteCategory(id);
    if (deleted) {
      return res.status(200).json({ message: 'Category deleted successfully' });
    }
    throw new Error('Category not found');
  } catch (error) {
    res.status(500).json({ message: 'Error deleting category', error });
  }
};
module.exports = {
    createCategory,
    getAllCategories,
    getCategoryById,
    updateCategory,
    deleteCategory
  };
  
