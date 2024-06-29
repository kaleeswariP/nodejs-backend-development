// run `node sample-app.js` in the terminal

const logRequestMiddleware = (req, res, next) => {
    console.log(req);
    next(req, res);
  };
  
  const express = require('express');
  const app = express();
  
  const sayHi = (req, res) => {
    res.setStatus(200).json({ meg: 'Hi' });
  };
  
  // console.log(app);
  
  app.get('/sayHi', logRequestMiddleware, sayHi);
  console.log(`Hello Node.js v${process.versions.node}!`);
  
  app.listen(3000, () => {
    console.log('server started');
  });
  