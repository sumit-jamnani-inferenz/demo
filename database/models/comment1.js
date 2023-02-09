'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  const Comment1 = sequelize.define(
    'Comment1',
    {
      postId: DataTypes.INTEGER,
      Comment1: DataTypes.TEXT,
      userId: DataTypes.INTEGER,
    },
    {},
  )
  Comment1.associate = function (models) {
    // associations can be defined here
    Comment1.belongsTo(models.User1, {
      foreignKey: 'userId',
      as: 'author',
    })
    Comment1.belongsTo(models.Post1, {
      foreignKey: 'postId',
      as: 'Post1',
    })
  }
  return Comment1
}
