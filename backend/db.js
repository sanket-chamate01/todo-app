const mongoose = require("mongoose");

mongoose.connect('')

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todoTable = mongoose.model('todos', todoSchema);

module.exports = {
    todoTable
}