/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wprh_dopbsp_days', {
    unique_key: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    calendar_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    day: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ''
    },
    year: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      defaultValue: '2017'
    },
    data: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    min_available: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    price_min: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    price_max: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'wprh_dopbsp_days'
  });
};
