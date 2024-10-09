import express from "express";
import userRouter from "./src/modules/user/userRouter.js";
import { dbConnection } from "./src/db/db.connect.js";
const app = express();

// Middleware to parse JSON
app.use(express.json());

app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log(`Server running on http://localhost:${3000}`);
});

dbConnection();
