import App from "./app.js";

import { PUERTO } from "./config.js";
import sequelize from "./database/database.js";
import Project from "./models/project.js";
import Task from "./models/task.js";

App.listen(PUERTO, () => {
  try {
    sequelize.sync({ force: true });
    console.log("Server is running on port", PUERTO);
  } catch (err) {
    console.error("Error de conexión con la base de datos", err);
  }
});
