const zod = require('zod');

const createTodo = zod.object({
    heading: zod.string(),
    description: zod.string(),
    deadline: zod.string(),
});

const updateTodo = zod.object({
    id: zod.string(),
});

module.exports = {
    createTodo,
    updateTodo,
};