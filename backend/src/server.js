const express = require('express');
const morgan = require('morgan');
const usersRouter = require('../routers/usersRouters');

const server = express()
const port = 3000;

server.set('port', port);

server.use(morgan('dev'));

server.use('/users/', usersRouter);
server.use('/user/:id', usersRouter);
server.use('/createUser/', usersRouter);
server.get('/', (req, res)=>{
    res.json({message:'Funcionando'})
})

module.exports = server;