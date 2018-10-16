/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wprh_dopbsp_reservations', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement: true
    },
    calendar_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    language: {
      type: DataTypes.STRING(8),
      allowNull: false,
      defaultValue: 'en'
    },
    currency: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: '$'
    },
    currency_code: {
      type: DataTypes.STRING(8),
      allowNull: false,
      defaultValue: 'USD'
    },
    check_in: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ''
    },
    check_out: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ''
    },
    start_hour: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ''
    },
    end_hour: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ''
    },
    no_items: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    price_total: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    refund: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    extras: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    extras_price: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    discount: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    discount_price: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    coupon: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    coupon_price: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    fees: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    fees_price: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    deposit: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    deposit_price: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    days_hours_history: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    form: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    address_billing: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    address_shipping: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(128),
      allowNull: false,
      defaultValue: ''
    },
    phone: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: ''
    },
    status: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: 'pending'
    },
    payment_method: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: 'default'
    },
    payment_status: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: 'pending'
    },
    transaction_id: {
      type: DataTypes.STRING(128),
      allowNull: false,
      defaultValue: ''
    },
    reservation_from: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: 'pinpoint'
    },
    uid: {
      type: DataTypes.STRING(75),
      allowNull: false
    },
    token: {
      type: DataTypes.STRING(128),
      allowNull: false,
      defaultValue: ''
    },
    ip: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: ''
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'wprh_dopbsp_reservations'
  });
};
