import express from "express";
const router = express.Router();
import {
  addEntry,
  getEntry,
  getNonSensitiveEntries,
} from "../services/diaryService";
import { checkNewEntry } from "../utils";

router.get("/", (_req, res) => {
  const entries = getNonSensitiveEntries();
  res.send(entries);
});

router.get("/:id", (req, res) => {
  const entry = getEntry(Number(req.params.id));
  if (!entry) res.sendStatus(404);

  res.send(entry);
});

router.post("/", (req, res) => {
  try {
    const newEntry = checkNewEntry(req.body);
    const savedEntry = addEntry(newEntry);
    res.json(savedEntry);
  } catch (error) {
    if (error instanceof Error) {
      res.statusCode = 400;
      res.send(error.message);
    }
  }
});

export default router;
