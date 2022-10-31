var express = require('express');
const { response } = require('../app');
var userModel = require('../modules/user');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {

  var userDetails = new userModel({
    name: 'Abc',
    email: 'abc@gmail.com',
    password: '12345'
  });

  userDetails.save(function (err, req) {
    if (err) throw err;

    res.render('index', { title: 'User Record Inserted' });
  });

});

// Users Post
router.post('/register', function (req, resp, next) {
  var userDetails = new userModel({
    name: req.body.Name,
    email: req.body.Email,
    password: req.body.Password,
  });

  userDetails.save().then(respResult => {
    resp.status(201).json({
      msg: "Inserted Successfully",
      results: respResult
    });
  })
    .catch(err => {
      resp.json(err);
    });
});


module.exports = router;
