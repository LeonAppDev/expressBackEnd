/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wprh_bwg_image_rate', {
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
    rate: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    ip: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    date: {
      type: DataTypes.STRING(64),
      allowNull: false
    }
  }, {
    tableName: 'wprh_bwg_image_rate'
  });
};
