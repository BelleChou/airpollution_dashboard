/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('disease', {
    id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    disease: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    percent: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'disease'
  });
};
