const express = require('express');

const bookController = require('../controllers/book');

const router = express.Router();

router.get('/', bookController.getAllbook);

router.post('/', bookController.postAllbook);

router.put('/', bookController.putAllbook);

router.delete('/:id', bookController.deleteAllbook);

module.exports = router;