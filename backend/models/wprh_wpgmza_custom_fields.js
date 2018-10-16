/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wprh_wpgmza_custom_fields', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(128),
      allowNull: false,
      unique: true
    },
    icon: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    attributes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    widget_type: {
      type: DataTypes.STRING(128),
      allowNull: true,
      defaultValue: 'none'
    }
  }, {
    tableName: 'wprh_wpgmza_custom_fields'
  });
};
