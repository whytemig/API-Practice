// init npm, install express generator, n nodemon 
// importing express, requiring express, and the port number.
// 
const express = require('express');
// requiring the database connection and authentification from the DB file.
const {sequelize, connectionTest} = require('./DB');


// making the application know that we have created our router in the routes file.
const apiRoutes = require('./routes');

const app = express(); 
const port = 5000;

app.use('/api',apiRoutes);
// app.use(connectionTest) why didn't it work?
app.use(express.json());


app.get('/', (req, res, next)=>{
    res.status(200).json({message: 'Working'});
})

app.listen(port, async ()=>{
    console.log(`Server is running on port ${port}`);
    // why did this work ?
    connectionTest()
})