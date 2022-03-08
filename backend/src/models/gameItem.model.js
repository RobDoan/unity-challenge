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

/**
 * @typedef GameItem
 */
const GameItem = mongoose.model('GameItem', gameItemSchema);

module.exports = GameItem;
