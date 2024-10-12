import express from "express";
import projectsRoutes from "./routes/projects.routes.js";
import morgan from "morgan";

const App = express();
App.use(express.json());

App.use("/projects", projectsRoutes);

export default App;
