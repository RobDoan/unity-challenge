const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const { imageSchema } = require('./image.model');

const gameItemSchema = mongoose.Schema(
  {
    category: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Category',
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    subtitle: String,
    description: String,
    images: [imageSchema],
    tags: [String],
    author: String,
    replayBundleUrlJson: String,
    duration: {
      type: Number,
      min: 0,
    },
    isDownloadable: {
      type: Boolean,
      default: false,
    },
    isStreamable: {
      type: Boolean,
      default: false,
    },
    version: {
      type: String,
      match: /[v]*\d+\.\d+/,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
gameItemSchema.plugin(toJSON);
gameItemSchema.plugin(paginate);


gameItemSchema.methods.categoryName = function(){
  return this.category && this.category.name
}

/**
 * Re-format images data. Add host
 */
gameItemSchema.methods.imageData = function(hostname){
  return this.images.map( (image) => {
      const {_id, url, type} = image;
      return {
        id: `${_id}`, url: `${hostname}${url}`, type: type || 1
      }
  })
}
/**
 * @typedef GameItem
 */
const GameItem = mongoose.model('GameItem', gameItemSchema);

module.exports = GameItem;
