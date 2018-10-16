/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wprh_wpgmza_maps', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    map_title: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    map_width: {
      type: DataTypes.STRING(6),
      allowNull: false
    },
    map_height: {
      type: DataTypes.STRING(6),
      allowNull: false
    },
    map_start_lat: {
      type: DataTypes.STRING(700),
      allowNull: false
    },
    map_start_lng: {
      type: DataTypes.STRING(700),
      allowNull: false
    },
    map_start_location: {
      type: DataTypes.STRING(700),
      allowNull: false
    },
    map_start_zoom: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    default_marker: {
      type: DataTypes.STRING(700),
      allowNull: false
    },
    type: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    alignment: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    directions_enabled: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    styling_enabled: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    styling_json: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    active: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    kml: {
      type: DataTypes.STRING(700),
      allowNull: false
    },
    bicycle: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    traffic: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    dbox: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    dbox_width: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    listmarkers: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    listmarkers_advanced: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    filterbycat: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    ugm_enabled: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    ugm_category_enabled: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    fusion: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    map_width_type: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    map_height_type: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    mass_marker_support: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    ugm_access: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    order_markers_by: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    order_markers_choice: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    show_user_location: {
      type: DataTypes.INTEGER(3),
      allowNull: false
    },
    default_to: {
      type: DataTypes.STRING(700),
      allowNull: false
    },
    other_settings: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'wprh_wpgmza_maps'
  });
};
