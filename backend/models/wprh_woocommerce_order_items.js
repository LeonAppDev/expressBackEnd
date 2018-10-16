/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wprh_woocommerce_order_items', {
    order_item_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    order_item_name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    order_item_type: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: ''
    },
    order_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    tableName: 'wprh_woocommerce_order_items'
  });
};
