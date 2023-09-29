const mongoose = require('mongoose');

mongoose
    .connect(process.env.DB_URI)
    .then((db) => console.log('Database connected.'))
    .catch((err) => console.log("Connection failed"));