const httpStatus = require('http-status');
const R = require('ramda');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { gameItemService } = require('../services');

const createGameItem = catchAsync(async (req, res) => {
  const gameItem = await gameItemService.createGameItem(req.body);
  res.status(httpStatus.CREATED).send(gameItem);
});

const getGameItem = catchAsync(async (req, res) => {
  const gameItem = await gameItemService.getGameItemById(req.params.gameItemId);
  if (!gameItem) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Game Item not found');
  }
  res.status(httpStatus.CREATED).send(gameItem);
});

const updateGameItem = catchAsync(async (req, res) => {
  const gameItem = await gameItemService.updateGameItemById(req.params.gameItemId, req.body);
  res.send(gameItem);
});

const removeGameItem = catchAsync(async (req, res) => {
  await gameItemService.deleteGameItemById(req.params.gameItemId);
  res.status(httpStatus.NO_CONTENT).send();
});

const listGameItems = catchAsync(async (req, res) => {
  const filter = R.pick(['name'], req.query);
  const options = R.pick(['sortBy', 'limit', 'page'], req.query);
  const requestHost = req.protocol + '://' + req.get('host');
  const gameItems = await gameItemService.queryGameItems(filter, {...options, requestHost});
  res.send(gameItems);
});

module.exports = {
  createGameItem,
  getGameItem,
  updateGameItem,
  removeGameItem,
  listGameItems,
};
