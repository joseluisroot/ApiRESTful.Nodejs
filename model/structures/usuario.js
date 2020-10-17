/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuario', {
    idUsuario: {
      autoIncrement: true,
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    nombres: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    apellidos: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    usuario: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    clave: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    correo: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'usuario'
  });
};
