const { Router } = require("express");
const { messages } = require("./indexRouter");
const newRouter = Router();

console.log("inrouter", messages);

newRouter.get("/", (req, res) => {
  res.render("form");
});

newRouter.post("/", (req, res) => {
  messages.push({
    text: req.body.message,
    user: req.body.name,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = newRouter;
