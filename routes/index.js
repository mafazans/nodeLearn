const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
    const fafa = { name: 'Fafa', age: 26, cool: true };
  // res.send('Hey! It works!');
  // res.json(fafa);
  res.json(req.query);
});

router.get('/reverse/:name', (req, res) => {
  const reverse = [...req.params.name].reverse().join('');
  res.send(reverse);
});

module.exports = router;
