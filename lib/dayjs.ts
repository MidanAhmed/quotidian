import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { get } from "http";
dayjs.extend(utc);

export function currentUTCTimestamp() {
  return dayjs().utc();
}

export function currentUTCHour() {
  return dayjs().utc().hour();
}

export function initialTimeSetter() {
  let initialTime = dayjs().local().set("hour", 8).set("minute", 0).utc();
  return { timestamp: initialTime.format(), hour: initialTime.hour() };
}

export function utcToLocalHour(timestamp: Date) {
  return dayjs(timestamp).local().hour();
}

// {
//     "time": "2023-10-21T10:57:31.309Z",
//     "hour": 16
// }
