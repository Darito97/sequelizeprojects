import Task from "../models/task.js";

const getTasks = async (req, res) => {
  try {
    let tasks = await Task.findAll();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({
      msg: "Hubo un error al obtener las tareas",
    });
  }
};

const createTask = async (req, res) => {
  try {
    let { name, done, projectid } = req.body;
    const newTask = await Task.create({
      name,
      done,
      projectId: projectid,
    });
    res.json(newTask);
  } catch (err) {
    res.status(500).json({
      msg: "Hubo un error al crear la tarea",
    });
  }
};

const updateTask = async (req, res) => {};

const deleteTask = async (req, res) => {};

const getTask = async (req, res) => {};

export { getTasks, createTask, updateTask, deleteTask, getTask };
