const { Image } = require('../models');

/**
 * Create a game item
 * @param {Object} files
 * @returns {Promise<[Image]>}
 */
const createImages = async (files) => {
  const images = files.map((file) => {
    // eslint-disable-next-line no-unused-vars
    const [_public, ...filePublicPath] = file.path.split('/');
    return {
      url: `/${filePublicPath.join('/')}`,
    };
  });
  return Image.insertMany(images);
};

module.exports = {
  createImages,
};
