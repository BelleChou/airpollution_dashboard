/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('linelist', {
    dataAQI: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    dataPosts: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'linelist'
  });
};
