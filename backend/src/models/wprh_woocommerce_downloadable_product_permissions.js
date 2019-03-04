/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wprh_woocommerce_downloadable_product_permissions', {
    permission_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    download_id: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    product_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    order_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    order_key: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    user_email: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    downloads_remaining: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    access_granted: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    access_expires: {
      type: DataTypes.DATE,
      allowNull: true
    },
    download_count: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'wprh_woocommerce_downloadable_product_permissions'
  });
};
