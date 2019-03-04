/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wprh_redirection_items', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    regex: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    position: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    last_count: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    last_access: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    group_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    status: {
      type: DataTypes.ENUM('enabled','disabled'),
      allowNull: false,
      defaultValue: 'enabled'
    },
    action_type: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    action_code: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false
    },
    action_data: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    match_type: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'wprh_redirection_items'
  });
};
