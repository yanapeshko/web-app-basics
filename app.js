const express = require('express');
const exhbs = require('express-handlebars');
const products = require('./products.json');

const app = express();

app.set('view engine', 'hbs');
app.engine(
  'hbs',
  exhbs({
    extname: 'hbs',
  }),
);
app.use(express.static('public'));

app.get('/', (req, res) => {
  //   console.log('This is callback for app.get(*/*)');
  //   console.log(req.url);
  //   res.send({ name: 'mango' });
  res.render('home');
});

app.get('/about', (req, res) => {
  //   console.log('This is callback for app.get(*/about*)');
  //   console.log(req.url);
  //   res.send('<h1>Hello this is /about</h1>');
  res.render('about', {
    cssFileName: 'about',
    pageTitle: 'What you should know about us',
  });
});

app.get('/products', (req, res) => {
  res.render('products', {
    products,
    cssFileName: 'products',
    pageTitle: 'Our products',
  });
});
app.get('/product/:productId', (req, res) => {
  console.log(req.params);

  const product = products.find(p => p.id === req.params.productId);
  res.render('product', { product });
});
//product/0
app.listen(4457, () => {
  console.log(`Application server is running on port ${4457}`);
});
