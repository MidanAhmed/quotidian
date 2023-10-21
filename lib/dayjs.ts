import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

export function currentUTCTimestamp() {
  return dayjs().utc();
}

export function currentUTCHour() {
  return dayjs().utc().hour();
}

// {
//     "time": "2023-10-21T10:57:31.309Z",
//     "hour": 16
// }
