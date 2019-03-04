/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wprh_bwg_album_gallery', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    album_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    is_album: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    alb_gal_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    order: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    tableName: 'wprh_bwg_album_gallery'
  });
};
