import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import routes from "./routers/index";
import morgan from "morgan";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

// app.use(express.json());
app.use(express.text());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("tiny"));
app.use(cors());
app.use(routes);


const server = app.listen(PORT, console.log(`Server Listening on ${PORT} `));

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {

  // close server & exit process
  server.close(() => process.exit(1));
});

export default app;