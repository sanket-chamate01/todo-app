const express = require("express");
const { todo, update } = require("./types");
const { todoTable } = require("./db");
const app = express();
const cors = require("cors")

app.use(express.json())
app.use(cors())

app.post("/addTodo", async (req, res) => {
    const createTodo = req.body;
    const parseTodo = todo.safeParse(createTodo);
    if(!parseTodo.success){
        res.status(411).json({
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
        res.status(411).json({
            message: "Wrong Inputs!!!"
        })
        return;
    }
    await todoTable.updateOne({
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