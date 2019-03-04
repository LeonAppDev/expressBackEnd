/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wprh_revslider_navigations', {
    id: {
      type: DataTypes.INTEGER(9),
      allowNull: false,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    handle: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    css: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    markup: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    settings: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'wprh_revslider_navigations'
  });
};
