const { Router } = require("express");
const msgRouter = Router();
const { messages } = require("./indexRouter");

msgRouter.get("/:id", (req, res) => {
  res.render("msg", { message: messages[req.params.id] });
});

module.exports = msgRouter;
