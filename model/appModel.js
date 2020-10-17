"user strict";

const Sequelize = require("sequelize");
const sequelize = require("./structures/db.js");

//catalogos
const UsuarioModel = require("./structures/usuario");
const RedesModel = require("./structures/redes");
const EstilosModel = require("./structures/estilos");

const Usuario = UsuarioModel(sequelize, Sequelize);
const Redes = RedesModel(sequelize, Sequelize);
const Estilos = EstilosModel(sequelize, Sequelize);

//transaccionales
const TarjetasModel = require("./structures/tarjetas");
const RedesTarjetasModel = require("./structures/redestarjeta");
const InfoTarjetaModel = require("./structures/infotarjeta");
const DescripcionTarjetaModel = require("./structures/descripciontarjeta");

const Tarjetas = TarjetasModel(sequelize, Sequelize);
const RedesTarjeta = RedesTarjetasModel(sequelize, Sequelize);
const InfoTarjeta = InfoTarjetaModel(sequelize, Sequelize);
const DescripcionTarjeta = DescripcionTarjetaModel(sequelize, Sequelize);

module.exports = { Usuario, Redes, Estilos, Tarjetas, RedesTarjeta, InfoTarjeta, DescripcionTarjeta };
