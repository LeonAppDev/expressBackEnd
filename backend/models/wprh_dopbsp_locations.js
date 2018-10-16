/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wprh_dopbsp_locations', {
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
    coordinates: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    calendars: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    link: {
      type: DataTypes.STRING(512),
      allowNull: false,
      defaultValue: ''
    },
    image: {
      type: DataTypes.STRING(512),
      allowNull: false,
      defaultValue: ''
    },
    businesses: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    businesses_other: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    languages: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(512),
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'wprh_dopbsp_locations'
  });
};
