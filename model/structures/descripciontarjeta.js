/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('descripciontarjeta', {
    idDescripcionTarjeta: {
      autoIncrement: true,
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    descripcion: {
      type: DataTypes.STRING(200),
      allowNull: true
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
      unique: "fk_descripcionTarjeta_tarjetas1"
    }
  }, {
    sequelize,
    tableName: 'descripciontarjeta'
  });
};
