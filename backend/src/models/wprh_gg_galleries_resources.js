/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wprh_gg_galleries_resources', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      autoIncrement: true
    },
    resource_type: {
      type: DataTypes.ENUM('folder','photo'),
      allowNull: false
    },
    resource_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    gallery_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'wprh_gg_galleries_resources'
  });
};
