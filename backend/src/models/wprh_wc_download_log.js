/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wprh_wc_download_log', {
    download_log_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    timestamp: {
      type: DataTypes.DATE,
      allowNull: false
    },
    permission_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    user_ip_address: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ''
    }
  }, {
    tableName: 'wprh_wc_download_log'
  });
};
