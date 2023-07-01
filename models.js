// creating our models through sequelize

const { sequelize} = require('./DB');
const {DataTypes} = require('sequelize');

const User = sequelize.define('Dbpractice', {
    content: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
    },

    completed:{
        type: DataTypes.DATEONLY
        },
    check:{
        type:DataTypes.BOOLEAN,
        allowNull:false
    },
    // freezeTableName: true
});

// sequelize.sync({ force: true });

module.exports = User;


