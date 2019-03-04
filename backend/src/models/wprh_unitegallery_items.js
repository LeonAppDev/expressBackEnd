/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wprh_unitegallery_items', {
    id: {
      type: DataTypes.INTEGER(9),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    published: {
      type: DataTypes.INTEGER(2),
      allowNull: false
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    alias: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    url_image: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    url_thumb: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ordering: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    catid: {
      type: DataTypes.INTEGER(9),
      allowNull: false
    },
    imageid: {
      type: DataTypes.INTEGER(9),
      allowNull: true
    },
    params: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    contentid: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    parent_id: {
      type: DataTypes.INTEGER(9),
      allowNull: true
    }
  }, {
    tableName: 'wprh_unitegallery_items'
  });
};
