/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wprh_woocommerce_shipping_zone_methods', {
    zone_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    instance_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    method_id: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    method_order: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    is_enabled: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    }
  }, {
    tableName: 'wprh_woocommerce_shipping_zone_methods'
  });
};
