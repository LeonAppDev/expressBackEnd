/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wprh_bwg_theme', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    options: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    default_theme: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    }
  }, {
    tableName: 'wprh_bwg_theme'
  });
};
