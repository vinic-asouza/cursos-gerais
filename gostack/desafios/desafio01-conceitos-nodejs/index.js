const express = require('express');

const server = express();
server.use(express.json());

const projects = [
    {
        id: 1,
        tittle: "Novo Projeto",
        tasks: ["Tarefa 1", "Tarefa 2"]
    },
    {
        id: 2,
        tittle: "Novo Projeto",
        tasks: ["Tarefa 1", "Tarefa 2"]
    }
];

server.get("/projects", (req, res) => {

    return res.json(projects)
})

server.post("/projects", (req, res) => {
    const { id, tittle, tasks} = req.body

    projects.push({id, tittle, tasks})

    return res.json(projects)
})

server.post("/projects/:id/tasks", (req, res) => {
    const { id } = req.params
    const { task } = req.body

    const project = projects.find(p => p.id == id)

    project.tasks.push(task)

    return res.json(projects)
})

server.put("/projects/:id", (req, res) => {
    const {id} = req.params
    const {tittle} = req.body

    const project = projects.find(p => p.id == id);
    project.tittle = tittle

    return res.json(project)
})

server.delete("/projects/:id", (req, res) => {
    const {id} = req.params

    const project = projects.findIndex(p => p.id == id);
    projects.splice(project, 1)

    return res.json(projects)
})

server.listen(3000)