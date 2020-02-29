import express, { Request, Response, NextFunction, Router } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import serverless from "serverless-http";

import initDb from "./initDb";
import { bodyFormatter, logger, errorHandler } from "./middlewares";

// configuration initializiation
dotenv.config();

// your router. should be imported from somewhere else
const router = Router();
router.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({ message: "hello world!" });
  next();
});

// initialize database on every request. Because lambda is not persistant
async function dbMiddleware(_: Request, __: Response, next: NextFunction) {
  try {
    await initDb();
  } catch (err) {
    next(err.message);
  }
  next();
}

// express app initializiation
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(dbMiddleware);

const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,POST,DELETE,OPTIONS",
  preflightContinue: true
};
app.use(cors(corsOptions));
app.use(bodyFormatter);

// create routes
app.use("/", router);

app.use(logger);
app.use(errorHandler); // error handling. after all route

const serverlessHandler = serverless(app);

// finish and export
export const handler = serverlessHandler;
export default app;
