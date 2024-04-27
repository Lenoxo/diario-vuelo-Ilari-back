import express from "express";
const router = express.Router();
import { getEntry, getNonSensitiveEntries } from "../services/diaryService";

router.get("/", (_req, res) => {
  const entries = getNonSensitiveEntries();
  res.send(entries);
});

router.get("/:id", (req, res) => {
  const entry = getEntry(Number(req.params.id));
  if (!entry) res.sendStatus(404);

  res.send(entry);
});

router.post("/", (_req, res) => {
  res.send("Saving a diary!");
});

export default router;
