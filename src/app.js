import express, { json } from "express";
import morgan from "morgan";
import productRouters from "./routers/products";
import {
  logErrors,
  errorHandler,
  wrapErrors,
} from "./middleware/error-Handlers";
import notFoundHandler from "./middleware/notFoundHandler";
import { fillData } from "./data";
//Importing routes
// import projectRoutes from "./routes/projects";

const app = express();

app.use(morgan("dev"));

app.use(json());

fillData();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//routes
app.use("/products", productRouters);

//Catch 404
app.use(notFoundHandler);

// error handler
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

export default app;
