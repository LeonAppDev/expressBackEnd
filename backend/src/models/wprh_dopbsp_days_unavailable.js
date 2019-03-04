/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wprh_dopbsp_days_unavailable', {
    unique_key: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    day: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ''
    },
    hour: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: ''
    },
    data: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'wprh_dopbsp_days_unavailable'
  });
};
