/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wprh_bwg_image_tag', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tag_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    image_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    gallery_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    tableName: 'wprh_bwg_image_tag'
  });
};
