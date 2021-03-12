const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const PORT = 5000;

let numbersOperations = [];

app.use(express.static('server/public'));

app.use(bodyParser.urlencoded({extended: true}));


// POST Routes

app.post('/number', (req, res) => {

  let numberObject = req.body;

  console.log('In /number POST route');
  console.log('NumberObject:', numberObject);

  doMathOperation(numberObject);

});


function doMathOperation(numberObject) {

  let num1


};// end doMathOperation




app.listen(PORT, () => {

  console.log('listening on port', PORT);
})