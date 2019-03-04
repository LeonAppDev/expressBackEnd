/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wprh_booking_record', {
    ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    booking_date: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    booking_date_read: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'wprh_booking_record'
  });
};
