import clock from "clock";
import document from "document";
import { preferences } from "user-settings";

const format2Digit = (value: number): string => {
  if (value < 10) {
    return "0" + value.toString();
  }
  return value.toString();
};

const yearElement = document.getElementById("year");
const monthElement = document.getElementById("month");
const dayElement = document.getElementById("day");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

clock.granularity = "seconds";
clock.addEventListener("tick", (evt) => {
  const today = evt.date;
  yearElement.text = today.getFullYear().toString();
  monthElement.text = format2Digit(today.getMonth() + 1);
  dayElement.text = format2Digit(today.getDate());
  hoursElement.text = format2Digit(today.getHours());
  minutesElement.text = format2Digit(today.getMinutes());
  secondsElement.text = format2Digit(today.getSeconds());
});
