/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wprh_redirection_404', {
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
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    agent: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    referrer: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ip: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 'wprh_redirection_404'
  });
};
