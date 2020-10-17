/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('redestarjeta', {
    idRed: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: {
          tableName: 'redes',
        },
        key: 'idRed'
      },
      unique: "fk_redesTarjeta_redes1"
    },
    idTarjeta: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: {
          tableName: 'tarjetas',
        },
        key: 'idTarjeta'
      },
      unique: "fk_redesTarjeta_tarjetas1"
    },
    nombreUsuarioRed: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'redestarjeta'
  });
};
