/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wprh_revslider_sliders', {
    id: {
      type: DataTypes.INTEGER(9),
      allowNull: false,
      autoIncrement: true
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    alias: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    params: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    settings: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(191),
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'wprh_revslider_sliders'
  });
};
