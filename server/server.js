const express =require('express');
const bodyParser = require('body-parser');
const productRouter = require('./routes/product.router.js');
const app = express();

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/product', productRouter)

const port = 5000;

app.listen(port, () => {console.log('server up on:', port);})