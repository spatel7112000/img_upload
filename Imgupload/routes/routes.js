const express = require('express');
const router = express.Router();
const controller = require('../controller/controller')

router.get('/get', controller.get)
router.post('/post', controller.post)
router.put('/put:_id', controller.put)
router.delete('/delete:_id', controller.delete)
router.get('/search/:key', controller.get)

module.exports = router