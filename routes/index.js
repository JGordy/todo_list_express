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
  let task= req.body.task
  todos.filter(function( obj ) {
    return obj.task !== task;
  });

  done.push(req.body.task)
  res.redirect("/");
  console.log(done);
});












module.exports = router;
