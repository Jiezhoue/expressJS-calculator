const express = require('express');
const router = express.Router();

router.get('/:num1/:operation/:num2', (req, res) => {
  let num1 = req.params.num1;
  let num2 = req.params.num2;
  switch(req.params.operation){
    case 'add':
      if(isNaN(num1) || isNaN(num2)){
        res.send("Both number should be an integer")
        return;
      }
      res.json({
        operation: `${num1} plus ${num2}`,
        result: parseInt(num1)+ parseInt(num2)
      })
    case 'minus':
      if(isNaN(num1) || isNaN(num2)){
        res.send("Both number should be an integer")
        return;
      }
      res.json({
        operation: `${num1} minus ${num2}`,
        result: parseInt(num1) - parseInt(num2)
      })
      case 'multiply':
        if(isNaN(num1) || isNaN(num2)){
          res.send("Both number should be an integer")
          return;
        }
        res.json({
          operation: `${num1} nultiplied by ${num2}`,
          result: parseInt(num1) * parseInt(num2)
        })
        case 'divide':
          if(isNaN(num1) || isNaN(num2)){
            res.send("Both number should be an integer")
            return;
          }else if(num2 === '0'){
            res.send("Can't divide by zero")
          }
          res.json({
            operation: `${num1} divided by ${num2}`,
            result: parseInt(num1) / parseInt(num2)
          })
        default:
          res.status(404).send("The API address is invalid")
  }

})

module.exports = router