/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tarjetas', {
    idTarjeta: {
      autoIncrement: true,
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    nombreTarjeta: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    codigoQR: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    idUsuario: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: {
          tableName: 'usuario',
        },
        key: 'idUsuario'
      },
      unique: "fk_tarjetas_usuario"
    },
    idEstilo: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: {
          tableName: 'estilos',
        },
        key: 'idEstilo'
      },
      unique: "fk_tarjetas_estilos1"
    },
    idInfoTarjeta: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: {
          tableName: 'infotarjeta',
        },
        key: 'idInfoTarjeta'
      },
      unique: "fk_tarjetas_infoTarjeta1"
    }
  }, {
    sequelize,
    tableName: 'tarjetas'
  });
};
