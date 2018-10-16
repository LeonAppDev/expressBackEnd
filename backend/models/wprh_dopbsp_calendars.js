/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wprh_dopbsp_calendars', {
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
    post_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    name: {
      type: DataTypes.STRING(128),
      allowNull: false,
      defaultValue: ''
    },
    max_year: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    hours_enabled: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: 'false'
    },
    hours_interval_enabled: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: 'false'
    },
    min_available: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    price_min: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    price_max: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    address: {
      type: DataTypes.STRING(512),
      allowNull: false,
      defaultValue: ''
    },
    address_en: {
      type: DataTypes.STRING(512),
      allowNull: false,
      defaultValue: ''
    },
    address_alt: {
      type: DataTypes.STRING(512),
      allowNull: false,
      defaultValue: ''
    },
    address_alt_en: {
      type: DataTypes.STRING(512),
      allowNull: false,
      defaultValue: ''
    },
    default_availability: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    last_update_google: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    last_update_airbnb: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    coordinates: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'wprh_dopbsp_calendars'
  });
};
