var express = require('express');
var router = express.Router();

/* GET index page. */
router.get('/', function(req, res, next) {
  res.render('Pages/index', { title: 'The Purr-fect Place' });
});
/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('Pages/index', { title: 'The Purr-fect Place' });
});
/* GET about us page. */
router.get('/aboutus', function(req, res, next) {
  res.render('Pages/about', { title: 'About Us' });
});
/* GET Product page. */
router.get('/product', function(req, res, next) {
  res.render('Pages/products', { title: 'Product' });
});
/* GET Services page. */
router.get('/service', function(req, res, next) {
  res.render('Pages/services', { title: 'Service' });
});
/* GET contact me page. */
router.get('/contactus', function(req, res, next) {
  res.render('Pages/contact', { title: 'Contact us' });
});

module.exports = router;
