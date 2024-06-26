require("dotenv").config();
const express = require("express");
const app = express();
const port = 4040;
const db = require("./db");
const homeRouter = require("./routes/home_router");
const ingredientRouter = require("./routes/ingredients_router");
const authRouter = require('./routes/auth_router')
const RecipesRouter = require('./routes/recipes_router')
const expressListRoutes = require("express-list-routes");
const errorHandler = require('./middlewares/error_handler')

app.use(express.static("client"));
app.use(express.json());

app.get("/test", (req, res) => {
  res.send("test");
});

app.use(homeRouter);
app.use(ingredientRouter);
app.use(authRouter)
app.use(RecipesRouter)

app.use(errorHandler)

expressListRoutes(app);

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
