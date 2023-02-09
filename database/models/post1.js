'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  const Post1 = sequelize.define(
    'Post1',
    {
      title: DataTypes.STRING,
      content: DataTypes.TEXT,
      userId: DataTypes.INTEGER,
    },
    {},
  )
  Post1.associate = function (models) {
    // associations can be defined here
    Post1.hasMany(models.Comment1, {
      foreignKey: 'postId',
      as: 'Comments1',
      onDelete: 'CASCADE',
    })

    Post1.belongsTo(models.User1, {
      foreignKey: 'userId',
      as: 'author',
      onDelete: 'CASCADE',
    })
  }
  return Post1
}
