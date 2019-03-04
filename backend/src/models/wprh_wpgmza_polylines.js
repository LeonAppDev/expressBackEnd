/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wprh_wpgmza_polylines', {
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
    polydata: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    linecolor: {
      type: DataTypes.STRING(7),
      allowNull: false
    },
    linethickness: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    opacity: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    polyname: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    tableName: 'wprh_wpgmza_polylines'
  });
};
