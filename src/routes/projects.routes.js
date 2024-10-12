import { Router } from "express";
import {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
} from "../controllers/projects.controller.js";

const routerProjects = Router();

routerProjects.get("/", getProjects);

routerProjects.post("/", createProject);
routerProjects.put("/:id", updateProject);
routerProjects.delete("/:id", deleteProject);
routerProjects.get("/:id", (req, res) => {});

export default routerProjects;
