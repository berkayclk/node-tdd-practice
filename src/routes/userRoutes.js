const express = require('express');
const router = express.Router();

router.post('/', (req, res, next) => {
  res.status(501).send(); //not implemented
});

module.exports = router;
