/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wprh_pmxe_google_cats', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    parent_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    parent_name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    level: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    }
  }, {
    tableName: 'wprh_pmxe_google_cats'
  });
};
