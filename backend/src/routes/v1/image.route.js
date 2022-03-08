const express = require('express');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: 'public/uploads/',
  filename(req, file, cb) {
    const uniquePrefix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(null, uniquePrefix + file.originalname);
  },
});

const upload = multer({ storage });
const { imageController } = require('../../controllers');

const router = express.Router();

router.route('/').post(upload.array('images'), imageController.createImages);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Image
 *   description: Upload image
 */
/**
 * @swagger
 * /images:
 *   post:
 *     summary: Upload image
 *     description: Upload Images
 *     tags: [Images]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *          schema:
 *            type: object
 *            properties:
 *              images:
 *                type: array
 *                items:
 *                  type: string
 *                  format: binary
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Image'
 */
