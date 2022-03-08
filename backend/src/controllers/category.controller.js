const httpStatus = require('http-status');
const R = require('ramda');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { categoryService } = require('../services');

const createCategory = catchAsync(async (req, res) => {
  const category = await categoryService.createCategory(req.body);
  res.status(httpStatus.CREATED).send(category);
});

const getCategory = catchAsync(async (req, res) => {
  const category = await categoryService.getCategoryById(req.params.categoryId);
  if (!category) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Category not found');
  }
  res.status(httpStatus.CREATED).send(category);
});

const updateCategory = catchAsync(async (req, res) => {
  const category = await categoryService.updateCategoryById(req.params.categoryId, req.body);
  res.send(category);
});

const listCategories = catchAsync(async (req, res) => {
  const filter = R.pick(['name'], req.query);
  const options = R.pick(['limit', 'page'], req.query);
  const categories = await categoryService.queryCategories(filter, options);
  res.send(categories);
});

module.exports = {
  createCategory,
  getCategory,
  updateCategory,
  listCategories,
};
