/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wprh_woocommerce_sessions', {
    session_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement: true,
      unique: true
    },
    session_key: {
      type: DataTypes.CHAR(32),
      allowNull: false,
      primaryKey: true
    },
    session_value: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    session_expiry: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    tableName: 'wprh_woocommerce_sessions'
  });
};
