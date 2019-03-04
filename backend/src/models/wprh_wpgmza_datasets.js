/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wprh_wpgmza_datasets', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    map_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    type: {
      type: DataTypes.INTEGER(3),
      allowNull: false
    },
    dataset_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    dataset: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    options: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'wprh_wpgmza_datasets'
  });
};
