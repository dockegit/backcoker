"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _ruta = _interopRequireDefault(require("./ruta.registro"));
var _ruta2 = _interopRequireDefault(require("./admin/ruta.computador"));
var _ruta3 = _interopRequireDefault(require("./admin/ruta.accesorio"));
var _ruta4 = _interopRequireDefault(require("./admin/ruta.sancion"));
var _ruta5 = _interopRequireDefault(require("./user/ruta.reserva"));
var _ruta6 = _interopRequireDefault(require("./admin/ruta.historial"));
var _ruta7 = _interopRequireDefault(require("./admin/ruta.nota"));
var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));
var _swaggerOutput = _interopRequireDefault(require("../tools/swagger-output.json"));
var _ruta8 = _interopRequireDefault(require("./admin/ruta.estadistica"));
var _pazysalvo = _interopRequireDefault(require("./admin/pazysalvo"));
var _perfil = _interopRequireDefault(require("./admin/perfil"));
var rutas = (0, _express.Router)();
// rutas admin

/**
 * estas son las ritas del administrador donde el se mueve
 * @type {Object}
 */
rutas.use("/", _ruta["default"]);
rutas.use("/admin", _ruta2["default"]);
rutas.use("/admin", _ruta3["default"]);
rutas.use("/admin", _ruta4["default"]);
rutas.use("/admin", _ruta6["default"]);
rutas.use("/admin", _ruta7["default"]);
rutas.use("/admin", _ruta8["default"]);
rutas.use("/admin", _pazysalvo["default"]);
rutas.use("/admin", _perfil["default"]);
rutas.use('/doc', _swaggerUiExpress["default"].serve, _swaggerUiExpress["default"].setup(_swaggerOutput["default"]));

// rutas user

rutas.use("/user", _ruta5["default"]);
var _default = exports["default"] = rutas;