/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wprh_redirection_logs', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    sent_to: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    agent: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    referrer: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    redirection_id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: true
    },
    ip: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    module_id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false
    },
    group_id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'wprh_redirection_logs'
  });
};
