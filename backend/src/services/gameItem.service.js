const httpStatus = require('http-status');
const { GameItem } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a game item
 * @param {Object} gameItemBody
 * @returns {Promise<GameItem>}
 */
const createGameItem = async (gameItemBody) => {
  return GameItem.create(gameItemBody);
};

/**
 * Query for gameItems
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryGameItems = async (filter, options) => {
  const gameItems = await GameItem.paginate(filter, { ...options, populate: 'category', } );

  const {results, page, limit, totalPages, totalResults} = gameItems
  const processResults = results.map( (item) => {
    // console.info(JSON.stringify())
    const newItem = Object.assign(item._doc, {
      type: 1,
      category: item.categoryName(),
      images: item.imageData(options.requestHost)
    })
    return newItem
  })
  return {results: processResults, page, limit, totalPages, totalResults}
};

/**
 * Get game item by id
 * @param {ObjectId} id
 * @returns {Promise<GameItem>}
 */
const getGameItemById = async (id) => {
  return GameItem.findById(id);
};

/**
 * Update game item by id
 * @param {ObjectId} gameItemId
 * @param {Object} updateBody
 * @returns {Promise<GameItem>}
 */
const updateGameItemById = async (gameItemId, updateBody) => {
  const gameItem = await getGameItemById(gameItemId);
  if (!gameItem) {
    throw new ApiError(httpStatus.NOT_FOUND, 'GameItem not found');
  }
  Object.assign(gameItem, updateBody);
  await gameItem.save();
  return gameItem;
};

/**
 * Delete game item by id
 * @param {ObjectId} gameItemId
 * @returns {Promise<GameItem>}
 */
const deleteGameItemById = async (gameItemId) => {
  const gameItem = await getGameItemById(gameItemId);
  if (!gameItem) {
    throw new ApiError(httpStatus.NOT_FOUND, 'GameItem not found');
  }
  await gameItem.remove();
  return gameItem;
};

module.exports = {
  createGameItem,
  queryGameItems,
  getGameItemById,
  updateGameItemById,
  deleteGameItemById,
};
