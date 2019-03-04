/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('$table', {
    id_user: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    id_coupon: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    id_order: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    tableName: '$table'
  });
};
