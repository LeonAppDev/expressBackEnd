/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wprh_woocommerce_api_keys', {
    key_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    permissions: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    consumer_key: {
      type: DataTypes.CHAR(64),
      allowNull: false
    },
    consumer_secret: {
      type: DataTypes.CHAR(43),
      allowNull: false
    },
    nonces: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    truncated_key: {
      type: DataTypes.CHAR(7),
      allowNull: false
    },
    last_access: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'wprh_woocommerce_api_keys'
  });
};
