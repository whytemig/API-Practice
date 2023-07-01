// installing sequelize and importing the application then connecting the database.

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('practiceDB', 'postgres','mousou89',{
    host: 'localhost',
    dialect:'postgres'
});

//testing the connecting authentification to the databade

const connectionTest = async()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
};

module.exports = {sequelize, connectionTest}