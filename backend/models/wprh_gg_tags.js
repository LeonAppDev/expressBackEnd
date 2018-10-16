/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wprh_gg_tags', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    pid: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    tags: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'wprh_gg_tags'
  });
};
