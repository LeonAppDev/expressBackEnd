/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wprh_yikes_easy_mc_forms', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      autoIncrement: true
    },
    list_id: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    form_name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    form_description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    fields: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    custom_styles: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    custom_template: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    send_welcome_email: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    redirect_user_on_submit: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    redirect_page: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    submission_settings: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    optin_settings: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    form_settings: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    error_messages: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    custom_notifications: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    impressions: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    submissions: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    custom_fields: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'wprh_yikes_easy_mc_forms'
  });
};
