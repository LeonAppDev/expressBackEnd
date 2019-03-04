/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wprh_dopbsp_extras_groups', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement: true
    },
    extra_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
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
    required: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: 'false'
    },
    no_items_multiply: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: 'true'
    },
    translation: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'wprh_dopbsp_extras_groups'
  });
};
