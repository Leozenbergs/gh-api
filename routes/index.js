const express = require('express')
const router = express.Router()

let user_controller = require('../controllers/userController');


router.get('/',  (req, res) => {
  res.send('Hello World!');
});

router.get('/users/:user', user_controller.index)

module.exports = router