const Category = require('./categModel');

const createCategory = async (categoryData) => await Category.create(categoryData);

const getAllCategories = async () => await Category.findAll();

const getCategoryById = async (id) => await Category.findByPk(id);

const updateCategory = async (id, categoryData) => await Category.update(categoryData, { where: { id } });

const deleteCategory = async (id) => await Category.destroy({ where: { id } });

module.exports = {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory
};
