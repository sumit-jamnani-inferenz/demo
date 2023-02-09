'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  const User1 = sequelize.define(
    'User1',
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {},
  )
  User1.associate = function (models) {
    // associations can be defined here
    User1.hasMany(models.Post1, {
      foreignKey: 'userId',
      as: 'Posts1',
      onDelete: 'CASCADE',
    })

    User1.hasMany(models.Comment1, {
      foreignKey: 'userId',
      as: 'Comments1',
      onDelete: 'CASCADE',
    })
  }
  return User1
}
