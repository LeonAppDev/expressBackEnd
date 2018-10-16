/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wprh_wpgmza_categories', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    active: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    category_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    category_icon: {
      type: DataTypes.STRING(700),
      allowNull: false
    },
    retina: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    parent: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    priority: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    image: {
      type: DataTypes.STRING(512),
      allowNull: true
    }
  }, {
    tableName: 'wprh_wpgmza_categories'
  });
};
