/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wprh_bwg_image_comment', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    image_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    date: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    mail: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    published: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    }
  }, {
    tableName: 'wprh_bwg_image_comment'
  });
};
