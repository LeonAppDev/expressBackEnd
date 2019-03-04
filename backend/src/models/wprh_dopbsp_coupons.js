/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wprh_dopbsp_coupons', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    name: {
      type: DataTypes.STRING(128),
      allowNull: false,
      defaultValue: ''
    },
    code: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ''
    },
    start_date: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ''
    },
    end_date: {
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
    no_coupons: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ''
    },
    operation: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: '+'
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    price_type: {
      type: DataTypes.STRING(8),
      allowNull: false,
      defaultValue: 'fixed'
    },
    price_by: {
      type: DataTypes.STRING(8),
      allowNull: false,
      defaultValue: 'once'
    },
    translation: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'wprh_dopbsp_coupons'
  });
};
