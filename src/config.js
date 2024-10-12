import dotenv from "dotenv";

dotenv.config();

const PUERTO = process.env.PUERTO || 3000;
const DB = process.env.DB || "proyectos";
const DB_USUARIO = process.env.DB_USUARIO || "root";
const DB_PASSWORD = process.env.DB_CON || "1234";
const DB_HOST = process.env.DB_HOST || "localhost";

export { PUERTO, DB, DB_USUARIO, DB_PASSWORD, DB_HOST };
