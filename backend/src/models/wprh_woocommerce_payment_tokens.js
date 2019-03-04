/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wprh_woocommerce_payment_tokens', {
    token_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    gateway_id: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    token: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    type: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    is_default: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'wprh_woocommerce_payment_tokens'
  });
};
