const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const PORT = 5000;

let numbersOperations = [];

app.use(express.static('server/public'));

app.use(bodyParser.urlencoded({extended: true}));


// POST Routes

app.get('/number', (req, res) => {
  console.log('you got to /number!');

  res.send(numbersOperations)
})

app.post('/number', (req, res) => {

  let numberObject = req.body;

  console.log('In /number POST route');
  console.log('NumberObject:', numberObject);

  doMath(numberObject);

    res.sendStatus(201);
});


function doMath(numberObject) {

  let num1 = numberObject.num1;
  let num2 = numberObject.num2;
  let operator = numberObject.operator;
  let answer;
  let answerObj;

  if(operator === '+') {
    
    answer = Number(num1) + Number(num2);

    console.log(`In doMath ${num1} + ${num2} = ${answer}`);
    
  }

  if(operator === '-') {
    answer = num1 - num2;

    console.log(`In doMath ${num1} - ${num2} = ${answer}`);
    
  }

  if(operator === '*') {
    
    answer = num1 * num2;

    console.log(`In doMath ${num1} * ${num2} = ${answer}`);
    
  }
  if(operator === '/') {
    
    answer = num1 / num2;
    console.log(`In doMath ${num1} / ${num2} = ${answer}`);
    
  }

  answerObj = {

    num1: num1,
    num2: num2,
    operator: operator,
    answer: answer

  }

  numbersOperations.push(answerObj);
  console.log('In numbersOperations array', numbersOperations);


};// end doMathOperation




app.listen(PORT, () => {

  console.log('listening on port', PORT);
})