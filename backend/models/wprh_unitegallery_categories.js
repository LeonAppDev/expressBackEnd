/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wprh_unitegallery_categories', {
    id: {
      type: DataTypes.INTEGER(9),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    alias: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ordering: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    params: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    type: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    parent_id: {
      type: DataTypes.INTEGER(9),
      allowNull: true
    }
  }, {
    tableName: 'wprh_unitegallery_categories'
  });
};
