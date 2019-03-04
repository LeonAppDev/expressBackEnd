/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wprh_pmxe_exports', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    parent_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    attch_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    options: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    scheduled: {
      type: DataTypes.STRING(64),
      allowNull: false,
      defaultValue: ''
    },
    registered_on: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    friendly_name: {
      type: DataTypes.STRING(64),
      allowNull: false,
      defaultValue: ''
    },
    exported: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    canceled: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    canceled_on: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    settings_update_on: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    last_activity: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    processing: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    executing: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    triggered: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    iteration: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    export_post_type: {
      type: DataTypes.STRING(64),
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'wprh_pmxe_exports'
  });
};
