import clock from "clock";
import document from "document";
import { battery } from "power";

const format2Digit = (value: number): string => {
  if (value < 10) {
    return "0" + value.toString();
  }
  return value.toString();
};

const dayOfWeekToText = (value: number): string => {
  switch (value) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
  }
};

const yearElement = document.getElementById("year");
const monthElement = document.getElementById("month");
const dayElement = document.getElementById("day");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const dayOfWeekElement = document.getElementById("dayOfWeek");
const batteryElement = document.getElementById("battery");

clock.granularity = "seconds";
clock.addEventListener("tick", (evt) => {
  const today = evt.date;
  yearElement.text = today.getFullYear().toString();
  monthElement.text = format2Digit(today.getMonth() + 1);
  dayElement.text = format2Digit(today.getDate());
  hoursElement.text = format2Digit(today.getHours());
  minutesElement.text = format2Digit(today.getMinutes());
  secondsElement.text = format2Digit(today.getSeconds());
  dayOfWeekElement.text = dayOfWeekToText(today.getDay());
  batteryElement.text = battery.chargeLevel.toString();
});
