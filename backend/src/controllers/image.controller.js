const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { imageService } = require('../services');

const createImages = catchAsync(async (req, res) => {
  const images = await imageService.createImages(req.files);
  res.status(httpStatus.CREATED).send(images);
});

module.exports = {
  createImages,
};
