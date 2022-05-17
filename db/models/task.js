'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Task.belongsTo(models.List, {
        foreignKey: 'list_id',
        as: 'list'
      });
    }
  }

  Task.init({
    text: DataTypes.STRING,
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    number: DataTypes.INTEGER,
    list_id:  {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Task',
  });

  return Task;
};
