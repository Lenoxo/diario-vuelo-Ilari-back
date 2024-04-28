import { NewDiaryEntry, Visibility, Weather } from "./types/diaries";

function isString(text: unknown): text is string {
  return typeof text === "string" || text instanceof String;
}

function isDate(text: string): boolean {
  return Boolean(Date.parse(text));
}

function isWeather(param: string): param is Weather {
  return Object.values(Weather)
    .map((v) => v.toString())
    .includes(param);
}

function isVisibility(param: string): param is Visibility {
  return Object.values(Visibility)
    .map((v) => v.toString())
    .includes(param);
}

function checkComment(comment: unknown): string {
  if (!comment || !isString(comment)) {
    throw new Error(`Comment incorrect or missing: ${comment}`);
  }

  return comment;
}

function checkDate(date: unknown): string {
  if (!date || !isString(date) || !isDate(date)) {
    throw new Error(`Date incorrect or missing: ${date}`);
  }

  return date;
}

function checkWeather(weather: unknown): Weather {
  if (!weather || !isString(weather) || !isWeather(weather)) {
    throw new Error(`Weather incorrect or missing: ${weather}`);
  }

  return weather;
}

function checkVisibility(visibility: unknown): Visibility {
  if (!visibility || !isString(visibility) || !isVisibility(visibility)) {
    throw new Error(`Visibility incorrect or missing: ${visibility}`);
  }

  return visibility;
}

function checkNewEntry(object: unknown): NewDiaryEntry {
  if (!object || typeof object !== "object") {
    throw new Error("Data incorrect or missing");
  }

  if (
    "comment" in object &&
    "date" in object &&
    "weather" in object &&
    "visibility" in object
  ) {
    const newEntry: NewDiaryEntry = {
      comment: checkComment(object.comment),
      date: checkDate(object.date),
      weather: checkWeather(object.weather),
      visibility: checkVisibility(object.visibility),
    };

    return newEntry;
  }

  throw new Error("Missing data details");
}

export { checkNewEntry };
