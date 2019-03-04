/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wprh_dopbsp_languages', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(128),
      allowNull: false,
      defaultValue: ''
    },
    code: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: ''
    },
    enabled: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'wprh_dopbsp_languages'
  });
};
