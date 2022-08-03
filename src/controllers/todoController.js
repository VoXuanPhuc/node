
const TodoController = {};

TodoController.getAll = (req, res) => {
    try {
    const todos = {id: "hello"};
        res.status(200).json({
            todos: todos
        })
    } catch (error) {
        res.status(400);
    }
};

module.exports = TodoController;