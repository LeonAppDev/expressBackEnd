/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wprh_dopbsp_woocommerce', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement: true
    },
    cart_item_key: {
      type: DataTypes.STRING(64),
      allowNull: false,
      defaultValue: ''
    },
    token: {
      type: DataTypes.STRING(64),
      allowNull: false,
      defaultValue: ''
    },
    order_item_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    product_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    calendar_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    language: {
      type: DataTypes.STRING(8),
      allowNull: false,
      defaultValue: ''
    },
    currency: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: ''
    },
    currency_code: {
      type: DataTypes.STRING(8),
      allowNull: false,
      defaultValue: ''
    },
    data: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'wprh_dopbsp_woocommerce'
  });
};
