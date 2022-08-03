const express = require("express");
const morgan = require("morgan"); // show info get api
const helmet = require("helmet"); // security
const cors = require("cors"); // 
const dotenv = require("dotenv"); // environment
// const { getAllTodos } = require("./src/controllers/todoController");

dotenv.config();
const port = process.env.PORT || 3331;
const app = express();

app.use(helmet());
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

app.use("/api", require("./src/routes/router.js"));
// app.get("/api", getAllTodos.getAll);

app.get("/", (req, res) => {
    res.json("hello word");
});

app.get("*", (req, res) => {
    res.json("hello word");
});

app.listen(port, () => {
    console.log("listening on port: " + port);
})