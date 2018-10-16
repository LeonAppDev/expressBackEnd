/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wprh_dopbsp_fees', {
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
    included: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: 'true'
    },
    extras: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: 'true'
    },
    cart: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: 'true'
    },
    translation: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'wprh_dopbsp_fees'
  });
};
