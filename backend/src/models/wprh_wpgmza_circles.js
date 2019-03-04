/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wprh_wpgmza_circles', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    map_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    center: {
      type: "POINT",
      allowNull: true
    },
    radius: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    color: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    opacity: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    tableName: 'wprh_wpgmza_circles'
  });
};
