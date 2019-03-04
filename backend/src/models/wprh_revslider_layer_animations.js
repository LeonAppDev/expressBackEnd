/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wprh_revslider_layer_animations', {
    id: {
      type: DataTypes.INTEGER(9),
      allowNull: false,
      autoIncrement: true
    },
    handle: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    params: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    settings: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'wprh_revslider_layer_animations'
  });
};
