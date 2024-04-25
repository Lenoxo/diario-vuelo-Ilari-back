import { entries } from "../../data/entries";
import { NonSensitiveDiaryEntry } from "../types/diaries";

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

function addEntry() {
  return null;
}

export { getEntries, addEntry, getNonSensitiveEntries };
