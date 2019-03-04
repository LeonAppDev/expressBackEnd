/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wprh_subcode_record', {
    ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    subcode: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    date_record: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    ip: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    keyword: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    matchtype: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    device: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    target: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    placement: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    session_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    site_page_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'wprh_subcode_record'
  });
};
