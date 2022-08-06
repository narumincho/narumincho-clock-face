import clock from "clock";
import document from "document";
import { preferences } from "user-settings";

// Update the clock every minute
clock.granularity = "seconds";

const myLabel = document.getElementById("clock-label");

clock.granularity = "seconds";

clock.addEventListener("tick", (evt) => {
  const today = evt.date;
  myLabel.text = today.getSeconds().toString();
});
