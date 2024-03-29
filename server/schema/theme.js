/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('theme', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    theme: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    percent: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'theme'
  });
};
