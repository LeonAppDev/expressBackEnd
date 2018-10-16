/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wprh_dopbsp_forms_fields', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement: true
    },
    form_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    type: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ''
    },
    position: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    multiple_select: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: 'false'
    },
    allowed_characters: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    size: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    is_email: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: 'false'
    },
    is_phone: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: 'false'
    },
    required: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: 'false'
    },
    add_to_day_hour_info: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: 'false'
    },
    add_to_day_hour_body: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: 'false'
    },
    translation: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'wprh_dopbsp_forms_fields'
  });
};
