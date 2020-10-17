/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('redes', {
    idRed: {
      autoIncrement: true,
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    imageLogo: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'redes'
  });
};
