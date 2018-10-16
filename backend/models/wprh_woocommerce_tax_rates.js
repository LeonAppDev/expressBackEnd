/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wprh_woocommerce_tax_rates', {
    tax_rate_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tax_rate_country: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: ''
    },
    tax_rate_state: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: ''
    },
    tax_rate: {
      type: DataTypes.STRING(8),
      allowNull: false,
      defaultValue: ''
    },
    tax_rate_name: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: ''
    },
    tax_rate_priority: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    tax_rate_compound: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    tax_rate_shipping: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    },
    tax_rate_order: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    tax_rate_class: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'wprh_woocommerce_tax_rates'
  });
};
