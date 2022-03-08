const express = require('express');
const validate = require('../../middlewares/validate');
const { gameItemValidation } = require('../../validations');
const { gameItemController } = require('../../controllers');

const router = express.Router();

router
  .route('/')
  .post(validate(gameItemValidation.createGameItem), gameItemController.createGameItem)
  .get(validate(gameItemValidation.listGameItems), gameItemController.listGameItems);

router
  .route('/:gameItemId')
  .get(validate(gameItemValidation.getGameItem), gameItemController.getGameItem)
  .patch(validate(gameItemValidation.updateGameItem), gameItemController.updateGameItem)
  .delete(validate(gameItemValidation.deleteGameItem), gameItemController.removeGameItem);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: GameItems
 *   description: GameItem management
 */
/**
 * @swagger
 * /game-items:
 *   post:
 *     summary: Create a game item
 *     description: Create a game item
 *     tags: [GameItems]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *          schema:
 *           $ref: '#/components/schemas/GameItem'
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/GameItem'
 *
 *   get:
 *     summary: Get all categories
 *     description: List of categories
 *     tags: [GameItems]
 *     parameters:
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *         default: 10
 *         description: Maximum number of game items
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *         description: Page number
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 results:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/GameItem'
 *                 page:
 *                   type: integer
 *                   example: 1
 *                 limit:
 *                   type: integer
 *                   example: 10
 *                 totalPages:
 *                   type: integer
 *                   example: 1
 *                 totalResults:
 *                   type: integer
 *                   example: 1
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /game-items/{gameItemId}:
 *   get:
 *     summary: Get a gameItem
 *     description: Logged in categories can fetch only their own gameItem information. Only admins can fetch other categories.
 *     tags: [GameItems]
 *     parameters:
 *       - in: path
 *         name: gameItemId
 *         required: true
 *         schema:
 *           type: string
 *         description: GameItem id
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/GameItem'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a gameItem
 *     description: Update a gameItem
 *     tags: [GameItems]
 *     parameters:
 *       - in: path
 *         name: gameItemId
 *         required: true
 *         schema:
 *           type: string
 *         description: GameItem id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/GameItem'
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/GameItem'
 *       "400":
 *         $ref: '#/components/responses/DuplicateName'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a gameItem
 *     description: Delete a gameItem
 *     tags: [GameItems]
 *     parameters:
 *       - in: path
 *         name: gameItemId
 *         required: true
 *         schema:
 *           type: string
 *         description: GameItem id
 *     responses:
 *       "200":
 *         description: No content
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */
