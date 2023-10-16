import { db } from "@/db";
import { defer } from "@defer/client";
import axios from "axios";
import sendEmail from "./sendEmail";

const dataFetcher = async () => {
  try {
    const { data } = await axios.get("https://api.quotable.io/quotes/random");

    const users = await db.user.findMany({
      where: {
        isSub: true,
      },
    });
    console.log(users, data);

    users.forEach(async (user) => await sendEmail(user, data));
  } catch (err) {
    console.log(err);
  }
};

export default defer.cron(dataFetcher, "0 * * * *");
