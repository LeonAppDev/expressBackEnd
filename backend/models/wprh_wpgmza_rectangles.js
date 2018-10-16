/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wprh_wpgmza_rectangles', {
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
    cornerA: {
      type: "POINT",
      allowNull: true
    },
    cornerB: {
      type: "POINT",
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
    tableName: 'wprh_wpgmza_rectangles'
  });
};
