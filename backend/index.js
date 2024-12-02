const express = require("express");
const app = express();

app.use(express.json())

app.post("/addTodo", (req, res) => {

})

app.get("/allTodos", (req, res) => {

})

app.put("/markTodo", (req, res) => {

})

app.listen(3000, () => {
    console.log("App running at port 3000")
})