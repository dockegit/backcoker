"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.metodos = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _db = _interopRequireDefault(require("../../database/db"));
var _mensaje = _interopRequireDefault(require("../../res/mensaje"));
/**
 * este es el controlador de historial
 * @module historial
 */

// historial completo
/**
 * esta funcion me sirve para que mostar el historial
 * 
 * @param {object} req captura peticiones en html
 * @param {object} res envia peteciones en html
 * 
 */
var historial = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var respuesta;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _db["default"].query("CALL sp_historial_usuarios();");
        case 3:
          respuesta = _context.sent;
          _mensaje["default"].success(req, res, 200, respuesta[0]);
          _context.next = 10;
          break;
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          _mensaje["default"].error(req, res, 500, "error en el historial");
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function historial(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

// historial especifico
/**
 * esta funcion me sirve para historial de las reservas
 * 
 * @param {object} req captura peticiones en html
 * @param {object} res envia peteciones en html
 * 
 */
var listarhistorial = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var id_reserva, respuesta;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          id_reserva = req.params.id_reserva;
          _context2.prev = 1;
          _context2.next = 4;
          return _db["default"].query("CALL sp_listar_historial(?);", [id_reserva]);
        case 4:
          respuesta = _context2.sent;
          _mensaje["default"].success(req, res, 200, respuesta[0]);
          _context2.next = 11;
          break;
        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](1);
          _mensaje["default"].error(req, res, 500, "error en listar historial");
        case 11:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 8]]);
  }));
  return function listarhistorial(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

/**
 * esta funcion me sirve para historial de las reservas
 * 
 * @param {object} req captura peticiones en html
 * @param {object} res envia peteciones en html
 * 
 */
var historialreserva = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var respuesta;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return _db["default"].query("CALL sp_historial_reserva();");
        case 3:
          respuesta = _context3.sent;
          _mensaje["default"].success(req, res, 200, respuesta[0]);
          _context3.next = 10;
          break;
        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          _mensaje["default"].error(req, res, 500, "error en el historial");
        case 10:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 7]]);
  }));
  return function historialreserva(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var metodos = exports.metodos = {
  historial: historial,
  listarhistorial: listarhistorial,
  historialreserva: historialreserva
};