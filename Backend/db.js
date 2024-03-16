const mongoose = require('mongoose');

const URL = process.env.URL;

mongoose.connect("mongodb+srv://lokendrakushwah8051:T2ARVD7gh0v5Lh3l@cluster0.bfc8eka.mongodb.net/Todo", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database connected');
}).catch((err) => {
    console.log("not connected");
});

const todoSchema = new mongoose.Schema({
    heading: String,
    description: String,
    deadline: String,
    isCompleted: {
        type: Boolean,
        default: false
    }
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = {
    Todo
};