/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wprh_dopbsp_discounts_items_rules', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement: true
    },
    discount_item_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    position: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
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
    operation: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: '-'
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    price_type: {
      type: DataTypes.STRING(8),
      allowNull: false,
      defaultValue: 'percent'
    },
    price_by: {
      type: DataTypes.STRING(8),
      allowNull: false,
      defaultValue: 'once'
    }
  }, {
    tableName: 'wprh_dopbsp_discounts_items_rules'
  });
};
