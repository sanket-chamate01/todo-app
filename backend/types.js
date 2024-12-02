const zod = require("zod")

const todo = zod.object({
    title: zod.string(),
    description: zod.string()
})

const update = zod.object({
    id: zod.string()
})

module.exports = {
    todo: todo,
    update: update
}