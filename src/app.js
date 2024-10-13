import express from "express";
import projectsRoutes from "./routes/projects.routes.js";
import morgan from "morgan";
import tasksRoutes from "./routes/tasks.routes.js";

const App = express();
App.use(express.json());

App.use("/projects", projectsRoutes);
App.use("/tasks", tasksRoutes);

export default App;
