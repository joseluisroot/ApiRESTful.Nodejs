/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('estilos', {
    idEstilo: {
      autoIncrement: true,
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    nombreEstilo: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    plantilla: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'estilos'
  });
};
