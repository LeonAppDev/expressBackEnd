/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wprh_dopbsp_discounts', {
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
    name: {
      type: DataTypes.STRING(128),
      allowNull: false,
      defaultValue: ''
    },
    extras: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: 'false'
    }
  }, {
    tableName: 'wprh_dopbsp_discounts'
  });
};
