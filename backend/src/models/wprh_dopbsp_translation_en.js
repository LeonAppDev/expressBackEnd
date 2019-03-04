/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wprh_dopbsp_translation_en', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement: true
    },
    key_data: {
      type: DataTypes.STRING(128),
      allowNull: false,
      defaultValue: ''
    },
    parent_key: {
      type: DataTypes.STRING(128),
      allowNull: false,
      defaultValue: ''
    },
    text_data: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    translation: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: 'backend'
    }
  }, {
    tableName: 'wprh_dopbsp_translation_en'
  });
};
