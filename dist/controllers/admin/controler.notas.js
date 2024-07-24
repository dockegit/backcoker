"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.metod = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _db = _interopRequireDefault(require("../../database/db"));
var _mensaje = _interopRequireDefault(require("../../res/mensaje"));
/**
 * este es el controlador de notas
 * @module notas
 */

/**
 * esta funcion me sirve para que le adminstrador agregue las notas
 * 
 * @param {object} req captura peticiones en html
 * @param {object} res envia peteciones en html
 * 
 */
var agregarnotas = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, titulo, notas, prioridad, estado, respuesta;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, titulo = _req$body.titulo, notas = _req$body.notas, prioridad = _req$body.prioridad, estado = _req$body.estado;
          _context.prev = 1;
          _context.next = 4;
          return _db["default"].query("CALL inssrtar_nota('".concat(titulo, "','").concat(notas, "','").concat(prioridad, "','").concat(estado, "');"));
        case 4:
          respuesta = _context.sent;
          if (respuesta[0].affectedRows == 1) {
            _mensaje["default"].success(req, res, 200, "Notas agregadas");
          } else {
            _mensaje["default"].error(req, res, 400, "Notas no agregadas");
          }
          _context.next = 11;
          break;
        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](1);
          _mensaje["default"].error(req, res, 400, "Notas no agregadas");
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 8]]);
  }));
  return function agregarnotas(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
/**
 * esta funcion me sirve para que le adminstrador agregue los accesorios
 * 
 * @param {object} req captura peticiones en html
 * @param {object} res envia peteciones en html
 * 
 */
var listarnotas = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var respuesta;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return _db["default"].query("CALL sp_listar_notas();");
        case 3:
          respuesta = _context2.sent;
          _mensaje["default"].success(req, res, 200, respuesta[0]);
          _context2.next = 10;
          break;
        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          _mensaje["default"].error(req, res, 500, "Error al mostrar");
        case 10:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return function listarnotas(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
/**
 * esta funcion me sirve para que le adminstrador modifique las notas
 * 
 * @param {object} req captura peticiones en html
 * @param {object} res envia peteciones en html
 */
var modificarnotas = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _req$body2, idnotas, titulo, notas, prioridad, estado, respuesta;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _req$body2 = req.body, idnotas = _req$body2.idnotas, titulo = _req$body2.titulo, notas = _req$body2.notas, prioridad = _req$body2.prioridad, estado = _req$body2.estado;
          _context3.prev = 1;
          _context3.next = 4;
          return _db["default"].query("CALL sp_editar_notas(?,?,?,?,?);", [idnotas, titulo, notas, prioridad, estado]);
        case 4:
          respuesta = _context3.sent;
          if (respuesta[0].affectedRows == 1) {
            _mensaje["default"].success(req, res, 200, "Notas modificadas");
          } else {
            _mensaje["default"].error(req, res, 400, "Notas no modificadas");
          }
          _context3.next = 11;
          break;
        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](1);
          _mensaje["default"].error(req, res, 400, "error");
        case 11:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[1, 8]]);
  }));
  return function modificarnotas(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
/**
 * esta funcion me sirve para que le adminstrador elimine las notas
 * 
 * @param {object} req captura peticiones en html
 * @param {object} res envia peteciones en html
 */
var eliminarnotas = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var idnotas, respuesta;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          idnotas = req.params.idnotas;
          _context4.prev = 1;
          _context4.next = 4;
          return _db["default"].query("CALL sp_aliminar_notas(".concat(idnotas, ");"));
        case 4:
          respuesta = _context4.sent;
          if (respuesta[0].affectedRows == 1) {
            _mensaje["default"].success(req, res, 200, "Notas eliminadas");
          } else {
            _mensaje["default"].error(req, res, 400, "Notas no eliminadas");
          }
          _context4.next = 11;
          break;
        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](1);
          _mensaje["default"].error(req, res, 400, "error al eliminar");
        case 11:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[1, 8]]);
  }));
  return function eliminarnotas(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var metod = exports.metod = {
  agregarnotas: agregarnotas,
  listarnotas: listarnotas,
  modificarnotas: modificarnotas,
  eliminarnotas: eliminarnotas
};