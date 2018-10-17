require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');

const { create, getOne, getAll, update, deleteProd } = require('./products_controller')

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)
}).catch(err => console.log(err));



const port = process.env.PORT || 3000;


app.get('/api/products/:id', getOne);
app.get('/api/products', getAll);
app.post('/api/create-products', create);
app.put('/api/products/:id', update)
app.delete('/api/products/:id', deleteProd);





app.listen(port, () => {
    console.log(`Server listening on port ${port}.`);
});