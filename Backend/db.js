const mongoose = require('mongoose');

const URL = process.env.URL;

mongoose.connect(URL, {
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
    deadline: Date,
    isCompleted: {
        type: Boolean,
        default: false
    }
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = {
    Todo
};