import express from "express";
import bodyParser from "body-parser";
import router from "./routes/users.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use("/users", router);

app.get("/", (req, res) => {
  console.log("TEST");

  res.send("Hello from Polock");
});

app.listen(PORT, () =>
  console.log(`Server Running on port: http://localhost:${PORT}`)
);
