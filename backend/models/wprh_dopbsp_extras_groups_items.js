/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wprh_dopbsp_extras_groups_items', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement: true
    },
    group_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    position: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
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
    default_value: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: 'no'
    },
    translation: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'wprh_dopbsp_extras_groups_items'
  });
};
