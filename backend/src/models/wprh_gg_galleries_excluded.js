/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wprh_gg_galleries_excluded', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    folder_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    photo_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    gallery_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'wprh_gg_galleries_excluded'
  });
};
