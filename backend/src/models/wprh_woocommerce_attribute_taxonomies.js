/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wprh_woocommerce_attribute_taxonomies', {
    attribute_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    attribute_name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    attribute_label: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    attribute_type: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    attribute_orderby: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    attribute_public: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    }
  }, {
    tableName: 'wprh_woocommerce_attribute_taxonomies'
  });
};
