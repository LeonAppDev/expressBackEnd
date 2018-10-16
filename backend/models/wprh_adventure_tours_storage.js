/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wprh_adventure_tours_storage', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    key_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    storage_key: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    value: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'wprh_adventure_tours_storage'
  });
};
