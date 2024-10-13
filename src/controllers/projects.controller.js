import Project from "../models/project.js";

const getProjects = async (req, res) => {
  try {
    let projects = await Project.findAll();
    res.json(projects);
  } catch (err) {
    res.status(500).json({
      msg: "Error en el servidor",
    });
  }
};

const createProject = async (req, res) => {
  try {
    let { name, priority, description } = req.body;
    const newProject = await Project.create({
      name,
      priority,
      description,
    });
    console.log(newProject.dataValues);
    res.json("POSTING /projects");
  } catch (err) {
    res.status(500).json({
      msg: "Error en el servidor",
    });
  }
};

const updateProject = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const { name, priority, description } = req.body;
    const project = await Project.update(
      {
        name,
        priority,
        description,
      },
      {
        where: {
          id: id,
        },
      }
    );
    res.json({
      msg: "Proyecto actualizado correctamente",
      project,
    });
  } catch (err) {
    res.status(500).json({
      msg: "Error en el servidor",
    });
  }
};

const deleteProject = async (req, res) => {
  try {
    const id = req.params.id;
    const project = await Project.destroy({
      where: {
        id: id,
      },
    });
    res.json({
      msg: "Proyecto eliminado correctamente",
      project,
    });
  } catch (err) {
    res.status(500).json({
      msg: "Error en el servidor",
    });
  }
};

const getProject = async (req, res) => {
  try {
    const id = req.params.id;
    const project = await Project.findOne({
      where: {
        id: id,
      },
    });
    res.json(project);
  } catch (err) {
    res.status(500).json({
      msg: "Error en el servidor",
    });
  }
};

export { getProjects, createProject, updateProject, deleteProject, getProject };
