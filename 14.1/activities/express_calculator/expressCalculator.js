var express = require('express');

var app = express();

app.get('/:operation/:firstNum/:secondNum', function(req, res){
  var operation = req.params.operation;

  var firstNum = parseInt(req.params.firstNum);
  var secondNum = parseInt(req.params.secondNum);
  var result;

  switch(operation){
    case 'add':
      result = firstNum + secondNum;
      break;
    case 'substract':
      result = firstNum - secondNum;
      break;
    case 'multiply':
      result = firstNum * secondNum;
      break;
    case 'divide':
      result = firstNum / secondNum;
      break;
    default:
      result = 'Sorry! Only adding, substracting, dividing and multiplying are allowed!';
  }

  res.send(result);

});

app.listen(3002);
