import { buttonEntry, containerEntryMenu, overlay } from "./ui";

buttonEntry.addEventListener("click", () => {
  overlay.classList.remove("hidden");
  containerEntryMenu.classList.remove("hidden");
});

overlay.addEventListener("click", () => {
  containerEntryMenu.classList.add("hidden");
  overlay.classList.add("hidden");
});
