"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = exports.ConfigModel = exports.ConfigPage = void 0;
const { DATABASE, USER, PASSWORD, HOST } = require('../config/index');
const { DataTypes } = require('sequelize');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(
//  'sertificateDB',
//  'root',
//  'root',
// {
//   host:'localhost',
//   dialect:'mysql'
// }
DATABASE, USER, PASSWORD, {
    host: HOST,
    dialect: 'mysql'
});
const modelOptions = {
    freezeTableName: true,
    timestamps: false
};
exports.ConfigPage = sequelize.define('page', {
    idPage: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, modelOptions);
exports.ConfigModel = sequelize.define('config', {
    idConfig: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    config: {
        type: DataTypes.JSON,
        allowNull: false
    }
}, modelOptions);
exports.UserModel = sequelize.define('user', {
    idUser: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, modelOptions);
exports.UserModel.hasMany(exports.ConfigModel, {
    foreignKey: {
        name: 'userId',
        allowNull: false
    }
});
exports.ConfigModel.belongsTo(exports.UserModel, {
    foreignKey: {
        name: 'userId',
        allowNull: false
    }
});
exports.ConfigPage.hasOne(exports.ConfigModel, {
    foreignKey: {
        name: 'pageId',
        allowNull: false
    }
});
exports.ConfigModel.belongsTo(exports.ConfigPage, {
    foreignKey: {
        name: 'pageId',
        allowNull: false
    }
});
sequelize.authenticate()
    .then(() => {
    console.log('DataBase was connected');
})
    .catch((error) => {
    console.log('Database want connected = ' + error);
});
sequelize.sync().then(() => {
    console.log('tables was created');
}).catch(e => {
    console.log('when be creating table something was wrong = ' + e);
});
//# sourceMappingURL=sequelize.js.map