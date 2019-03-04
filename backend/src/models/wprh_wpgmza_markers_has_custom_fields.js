/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wprh_wpgmza_markers_has_custom_fields', {
    field_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    object_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    value: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'wprh_wpgmza_markers_has_custom_fields'
  });
};
