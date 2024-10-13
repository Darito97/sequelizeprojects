import { Router } from "express";
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  getTask,
} from "../controllers/tasks.controller.js";

const tasksRoutes = Router();

tasksRoutes.get("/", getTasks);
tasksRoutes.post("/", createTask);
tasksRoutes.put("/:id", updateTask);
tasksRoutes.delete("/:id", deleteTask);
tasksRoutes.get("/:id", getTask);

export default tasksRoutes;
