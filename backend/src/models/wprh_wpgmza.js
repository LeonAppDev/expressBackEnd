/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wprh_wpgmza', {
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
    address: {
      type: DataTypes.STRING(700),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    pic: {
      type: DataTypes.STRING(700),
      allowNull: false
    },
    link: {
      type: DataTypes.STRING(700),
      allowNull: false
    },
    icon: {
      type: DataTypes.STRING(700),
      allowNull: false
    },
    lat: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    lng: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    anim: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(700),
      allowNull: false
    },
    infoopen: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    category: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    approved: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    retina: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    type: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    did: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    other_data: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    latlng: {
      type: "POINT",
      allowNull: true
    }
  }, {
    tableName: 'wprh_wpgmza'
  });
};
