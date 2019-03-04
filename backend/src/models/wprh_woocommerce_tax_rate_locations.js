/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wprh_woocommerce_tax_rate_locations', {
    location_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    location_code: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    tax_rate_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    location_type: {
      type: DataTypes.STRING(40),
      allowNull: false
    }
  }, {
    tableName: 'wprh_woocommerce_tax_rate_locations'
  });
};
