import express from "express";
import diaryRouter from "./routes/diaries";
import cors from "cors";

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());

app.get("/ping", (_req, res) => {
  console.log("Hay un ping por aquí");
  res.send("pong");
});

app.use("/api/diaries", diaryRouter);

app.listen(PORT, () => console.log("Server running in port: " + PORT));
