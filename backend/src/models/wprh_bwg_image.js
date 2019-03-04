/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wprh_bwg_image', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    gallery_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    slug: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    filename: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    image_url: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    thumb_url: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    alt: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    date: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    size: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    filetype: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    resolution: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    author: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    order: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    published: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    comment_count: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    avg_rating: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    rate_count: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    hit_count: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    redirect_url: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    pricelist_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    tableName: 'wprh_bwg_image'
  });
};
