const mongoose = require('mongoose');

const imageSchema = mongoose.Schema({
  url: String,
  type: Number,
});

/**
 * @typedef Image
 */
const Image = mongoose.model('Image', imageSchema);

module.exports = {
  Image,
  imageSchema,
};
