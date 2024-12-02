const express = require("express");
const { todo, update } = require("./types");
const { todoTable } = require("./db");
const app = express();

app.use(express.json())

app.post("/addTodo", async (req, res) => {
    const createTodo = req.body;
    const parseTodo = todo.safeParse(createTodo);
    if(!parseTodo.success){
        res.send(411).json({
            message: "Wrong Inputs!!!"
        })
        return;
    }
    await todoTable.create({
        title: createTodo.title,
        description: createTodo.description,
        completed: false
    })
    res.json({
        message: "Todo created successfully"
    })
})

app.get("/allTodos", async (req, res) => {
    const todos = await todoTable.find({})
    res.json({
        todos
    })
})

app.put("/markTodo", async (req, res) => {
    const markId = req.body;
    const parseId = update.safeParse(markId);
    if(!parseId.success){
        res.send(411).json({
            message: "Wrong Inputs!!!"
        })
        return;
    }
    await todoTable.update({
        _id: req.body.id
    }, {
        completed: true
    })
    res.json({
        message: "Todo marked as completed"
    })
})

app.listen(3000, () => {
    console.log("App running at port 3000")
})