import { Router } from "express";
import rutaregistro from "./ruta.registro";
import rutacomputador from "./admin/ruta.computador";
import rutaaccesorio from "./admin/ruta.accesorio";
import rutasancion from "./admin/ruta.sancion";
import rutareserva from "./user/ruta.reserva";
import rutahistorial from "./admin/ruta.historial";
import rutanota from "./admin/ruta.nota";
import swaggerUi from "swagger-ui-express";
import swaggerFile from '../tools/swagger-output.json';
import estadistica from "./admin/ruta.estadistica";
import pazysalvo from "./admin/pazysalvo";
import perfil from "./admin/perfil";

const rutas = Router();
// rutas admin

/**
 * estas son las ritas del administrador donde el se mueve
 * @type {Object}
 */
rutas.use("/" ,rutaregistro);
rutas.use("/admin" ,rutacomputador);
rutas.use("/admin",rutaaccesorio);
rutas.use("/admin",rutasancion);
rutas.use("/admin", rutahistorial);
rutas.use("/admin", rutanota);
rutas.use("/admin", estadistica);
rutas.use("/admin", pazysalvo);
rutas.use("/admin", perfil);

rutas.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));


// rutas user

rutas.use("/user", rutareserva);

export default rutas;