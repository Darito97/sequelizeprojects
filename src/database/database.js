import { Sequelize } from "sequelize";

import { DB, DB_USUARIO, DB_PASSWORD, DB_HOST } from "../config.js";

const sequelize = new Sequelize(DB, DB_USUARIO, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "mysql",
});

export default sequelize;
