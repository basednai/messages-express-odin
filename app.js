const express = require("express");
const path = require("path");

const app = express();
const indexRouter = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter");
const msgRouter = require("./routes/msgRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/new", newRouter);
app.use("/msg", msgRouter);

app.use('*', indexRouter)

const PORT = 3005;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
