const express = require('express');
const app = express();
const { createTodo, updateTodo } = require('./types');
const { Todo } = require('./db');
const port = 3000;

app.use(express.json()); // for parsing application/json

app.post('/todo', async (req, res) => {
    
    const Payload = createTodo.safeParse(req.body); // validate the request body
    console.log(Payload);
    if (!Payload.success) {
        res.status(411).json({
            msg: 'Invalid data',
            error: Payload.error.toString() // Include the error message
        })
        return;
    }
    // put the data in the mongodb
    await Todo.create({
        heading: req.body.heading,
        description: req.body.description,
        deadline: req.body.deadline,
        isCompleted: false
    });

    res.json({
        msg: 'Todo created successfully'
    });
});

app.get('/todos', async (req, res) => {
    const todos = await Todo.find({
        isCompleted: false
    }); // get all the todos from the mongodb

    res.json({
        todos
    });
});

app.put('/completed', async (req, res) => {
    const Payload = updateTodo.safeParse(req.body); // validate the request body
    if (!Payload.success) {
        res.status(411).json({
            msg: 'Invalid data',
        })
        return;
    }
    // update the todo in the mongodb
    await Todo.updateOne({
        _id: req.body.id
    }, {
        isCompleted: true
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});