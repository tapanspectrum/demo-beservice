const express = require('express');
const bodyParser = require('body-parser');
const cors =  require('cors');
const dbconnect = require('./config/mongoose.connect');
const productroute = require('./app/routes/product.routes')

// create express app
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

// DB Connection Checking start here

// dbconnect.dbinit();

// DB Connection Checking end here

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "working"});
});
// productroute(app);

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});