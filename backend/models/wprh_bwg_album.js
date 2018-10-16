/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wprh_bwg_album', {
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
    slug: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    preview_image: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    random_preview_image: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    order: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    author: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    published: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    }
  }, {
    tableName: 'wprh_bwg_album'
  });
};
