const express = require("express");
const app = express();
const port = 3000;

const data = [
    { name: "Michael Choi", createdAt: "23-01-2013", message: "This is my message This is my message This is my message This is my message This is my message" },
    { name: "Jane Doe", createdAt: "15-06-2020", message: "Hello world! Excited to be here." },
    { name: "John Smith", createdAt: "01-02-2018", message: "Learning Node.js is fun!" }
];

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index", { posts: data });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
