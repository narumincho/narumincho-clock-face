import clock from "clock";
import document from "document";
import { preferences } from "user-settings";

const padSpace = (value: number): string => {
  if (value < 10) {
    return "0" + value.toString();
  }
  return value.toString();
};

const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

clock.granularity = "seconds";
clock.addEventListener("tick", (evt) => {
  const today = evt.date;
  hoursElement.text = padSpace(today.getHours());
  minutesElement.text = padSpace(today.getMinutes());
  secondsElement.text = padSpace(today.getSeconds());
});
