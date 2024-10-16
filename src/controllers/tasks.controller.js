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
    let { name, done, projectId } = req.body;
    const newTask = await Task.create({
      name,
      done,
      projectId: projectId,
    });
    res.json(newTask);
  } catch (err) {
    res.status(500).json({
      msg: "Hubo un error al crear la tarea",
    });
  }
};

const updateTask = async (req, res) => {
  try {
    let { id } = req.params;
    let { name, done, projectId } = req.body;
    const taskUpdated = await Task.update(
      {
        name,
        done,
        projectId,
      },
      {
        where: {
          id: id,
        },
      }
    );
    res.json({
      msg: "Tarea actualizada correctamente",
      taskUpdated,
    });
  } catch (err) {
    res.status(500).json({
      msg: "Hubo un error al actualizar la tarea",
    });
  }
};

const deleteTask = async (req, res) => {
  try {
    let { id } = req.params;
    const taskDeleted = await Task.destroy({
      where: {
        id: id,
      },
    });
    res.json({
      msg: "Tarea eliminada correctamente",
      taskDeleted,
    });
  } catch (err) {
    res.status(500).json({
      msg: "Hubo un error al eliminar la tarea",
    });
  }
};

const getTask = async (req, res) => {
  try {
    let { id } = req.params;
    const task = await Task.findOne({
      where: {
        id: id,
      },
    });
    res.json(task);
  } catch (err) {
    res.status(500).json({
      msg: "Hubo un error al obtener la tarea",
    });
  }
};

export { getTasks, createTask, updateTask, deleteTask, getTask };
