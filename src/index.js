import App from "./app.js";

import { PUERTO } from "./config.js";
import sequelize from "./database/database.js";

App.listen(PUERTO, () => {
  try {
    sequelize.authenticate();
    console.log("Conexión exitosa con la base de datos");
    console.log("Server is running on port", PUERTO);
  } catch (err) {
    console.error("Error de conexión con la base de datos", err);
  }
});
