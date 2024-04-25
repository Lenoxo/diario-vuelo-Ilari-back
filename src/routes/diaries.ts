import express from "express";
const router = express.Router();
import { getNonSensitiveEntries } from "../services/diaryService";

router.get("/", (_req, res) => {
  const entries = getNonSensitiveEntries();
  res.send(entries);
});

router.post("/", (_req, res) => {
  res.send("Saving a diary!");
});

export default router;
