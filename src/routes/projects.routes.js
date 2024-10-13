import { Router } from "express";
import {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
  getProject,
} from "../controllers/projects.controller.js";

const routerProjects = Router();

routerProjects.get("/", getProjects);

routerProjects.post("/", createProject);
routerProjects.put("/:id", updateProject);
routerProjects.delete("/:id", deleteProject);
routerProjects.get("/:id", getProject);

export default routerProjects;
