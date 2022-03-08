const Joi = require('joi');
const { objectId } = require('./custom.validation');

const body = Joi.object().keys({
  category: Joi.string().required().custom(objectId),
  title: Joi.string().required(),
  subtitle: Joi.string(),
  description: Joi.string(),
  images: Joi.array().items(
    Joi.object({
      id: Joi.string().custom(objectId),
      url: Joi.string(),
      type: Joi.number(),
    })
  ),
  tags: Joi.array().items(Joi.string()),
  author: Joi.string(),
  replayBundleUrlJson: Joi.string(),
  duration: Joi.number().positive(),
  type: Joi.number().positive(),
  isDownloadable: Joi.boolean(),
  isStreamable: Joi.boolean(),
  version: Joi.string().pattern(/[v]*\d+\.\d+/),
});

const createGameItem = { body };

const listGameItems = {
  query: Joi.object().keys({
    sortBy: Joi.string,
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getGameItem = {
  params: Joi.object().keys({
    gameItemId: Joi.string().custom(objectId),
  }),
};

const updateGameItem = {
  params: Joi.object().keys({
    gameItemId: Joi.required().custom(objectId),
  }),
  body: body.keys({ category: Joi.string().custom(objectId), title: Joi.string() }),
};

const deleteGameItem = {
  params: Joi.object().keys({
    gameItemId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createGameItem,
  listGameItems,
  getGameItem,
  updateGameItem,
  deleteGameItem,
};
