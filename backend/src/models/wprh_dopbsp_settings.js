/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wprh_dopbsp_settings', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement: true
    },
    unique_key: {
      type: DataTypes.STRING(128),
      allowNull: false,
      defaultValue: ''
    },
    value: {
      type: DataTypes.STRING(128),
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'wprh_dopbsp_settings'
  });
};
