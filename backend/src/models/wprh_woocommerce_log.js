/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wprh_woocommerce_log', {
    log_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    timestamp: {
      type: DataTypes.DATE,
      allowNull: false
    },
    level: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    source: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    context: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'wprh_woocommerce_log'
  });
};
