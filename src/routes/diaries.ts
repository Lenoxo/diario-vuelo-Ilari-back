/* eslint-disable @typescript-eslint/no-unsafe-argument */
import express from "express";
const router = express.Router();
import {
  addEntry,
  getEntry,
  getNonSensitiveEntries,
} from "../services/diaryService";

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
  const savedEntry = addEntry(req.body);
  res.json(savedEntry);
});

export default router;
