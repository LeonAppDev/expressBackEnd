/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wprh_dopbsp_api_keys', {
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
    api_key: {
      type: DataTypes.STRING(128),
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'wprh_dopbsp_api_keys'
  });
};
