import { entries } from "../../data/entries";
import {
  DiaryEntry,
  NewDiaryEntry,
  NonSensitiveDiaryEntry,
} from "../types/diaries";

function getEntries() {
  return entries;
}

function getNonSensitiveEntries(): NonSensitiveDiaryEntry[] {
  return entries.map(({ id, date, weather, visibility }) => ({
    id,
    date,
    weather,
    visibility,
  }));
}

function getEntry(id: number): DiaryEntry | undefined {
  const entry = entries.find((diary) => diary.id === id);
  return entry;
}

function addEntry(entry: NewDiaryEntry): DiaryEntry {
  const savedEntry = {
    id: Math.max(...entries.map((e) => e.id + 1)),
    ...entry,
  };
  entries.push(savedEntry);
  return savedEntry;
}

export { getEntries, addEntry, getNonSensitiveEntries, getEntry };
