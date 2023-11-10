import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

export function convertToUTCTimestamp(timestamp: Date) {
  return dayjs(timestamp).utc().format();
}

export function currentUTCHour() {
  return dayjs().utc().hour();
}

export function timeSetter(t = 8) {
  let initialTime = dayjs().local().set("hour", t).set("minute", 0).utc();
  return { timestamp: initialTime.format(), hour: initialTime.hour() };
}

export function utcToLocalHour(timestamp: Date) {
  return dayjs(timestamp).local().hour();
}
