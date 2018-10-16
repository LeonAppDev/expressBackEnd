/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wprh_dopbsp_models', {
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
    enabled: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: 'true'
    },
    multiple_calendars: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: 'false'
    },
    translation: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    translation_calendar: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'wprh_dopbsp_models'
  });
};
