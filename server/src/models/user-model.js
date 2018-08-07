// const crypto = require('crypto');
const bcrypt = require('bcrypt-nodejs');


module.exports = function(sequelize, DataTypes) {
    const user = sequelize.define("user", {
        firstName: {
            type: DataTypes.STRING,
            allowNull: true
            },
        lastName: {
            type: DataTypes.STRING,
            allowNull: true
            },
        group: {
            type: DataTypes.STRING,
            allowNull: true
            },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
              }
            },
        location: {
            type: DataTypes.STRING,
            allowNull: true
            },
        authorized: {
            type: DataTypes.BOOLEAN,
            allowNull: true
            },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            }, 
        availability: {
            type: DataTypes.BOOLEAN,
            allowNull: true
            },
        reason: {
            type: DataTypes.STRING,
            allowNull: true
            }
    });
    user.prototype.generateHash = (password) => {
        return bcrypt.hashSync(password, bcrypt.genSaltSync())
    }
    user.prototype.validatePassword = (password) => {
        return bcrypt.compare(password, this.password)   
    }
    return user;
};