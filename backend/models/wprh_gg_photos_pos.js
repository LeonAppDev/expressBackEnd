/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wprh_gg_photos_pos', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    photo_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    scope: {
      type: DataTypes.ENUM('main','folder','gallery'),
      allowNull: false
    },
    scope_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    position: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '2147483647'
    }
  }, {
    tableName: 'wprh_gg_photos_pos'
  });
};
