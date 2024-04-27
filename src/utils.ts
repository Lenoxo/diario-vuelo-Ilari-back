import { NewDiaryEntry } from "./types/diaries";

function checkNewEntry(object: unknown): NewDiaryEntry {
  const newDiaryEntry: NewDiaryEntry = (object) => {
    // ...
    // TODO: Validar cada llave / propiedad del objeto para que sea la correcta
  };
  return newDiaryEntry;
}

export { checkNewEntry };
