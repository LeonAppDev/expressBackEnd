/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wprh_wpgmza_polygon', {
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
    innerpolydata: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    linecolor: {
      type: DataTypes.STRING(7),
      allowNull: false
    },
    lineopacity: {
      type: DataTypes.STRING(7),
      allowNull: false
    },
    fillcolor: {
      type: DataTypes.STRING(7),
      allowNull: false
    },
    opacity: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    link: {
      type: DataTypes.STRING(700),
      allowNull: false
    },
    ohfillcolor: {
      type: DataTypes.STRING(7),
      allowNull: false
    },
    ohlinecolor: {
      type: DataTypes.STRING(7),
      allowNull: false
    },
    ohopacity: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    polyname: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    tableName: 'wprh_wpgmza_polygon'
  });
};
