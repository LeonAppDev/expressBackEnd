/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wprh_gg_photos', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    folder_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    album_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    attachment_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    position: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '9000'
    },
    timestamp: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'wprh_gg_photos'
  });
};
