const express = require('express');

const expressApp = express();

expressApp.use((req, res, next) => {

  console.log('First middleware');
  next();

});

expressApp.use((req, res, next) => {

  res.send('Hello from express, this is a server response');

});

module.exports = expressApp;
