const express = require("express")
const  router = express.Router();

const todos = [];
const done = [];

router.get("/", function(req, res) {
  res.render("list", {todos: todos, done: done})
});

router.post("/list", function(req, res) {
    let obj = {task: req.body.task, complete: false, id: todos.length + 1};
  todos.push(obj);
  res.redirect("/");
});

// and another post request
router.post("/list/:id", function(req, res) {
console.log(todos);
  let todo = todos.find( function(todo) {
    return todo.id == req.params.id;
  })
  let index = todos.indexOf(todo);
  todos.splice(index, 1)
  done.push(req.body.task)
  res.redirect("/");

  console.log(done);
});

module.exports = router;
