import { Entry } from "./types";

export let ENTRY_LIST: Entry[] = [];

export function addEntry(entry: Entry) {
  ENTRY_LIST.push(entry);
}

export function getEntries(): Entry[] {
  return ENTRY_LIST;
}
