import { db } from "@/db";
import { defer } from "@defer/client";
import axios from "axios";
import { currentUTCHour } from "@/lib/dayjs";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

// const headers = {
//   "Content-Type": "application/json",
//   Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
// };

const dummyFetcher = async () => {
  try {
    const currhour = currentUTCHour();
    console.log(currhour);

    const users = await db.user.findMany({
      where: {
        isSub: true,
        prefHour: {
          equals: currhour,
        },
      },
    });
    console.log(users);

    users.forEach(async (user) => {
      const emaildata = {
        from: "Quotidian <onboarding@resend.dev>",
        to: user.email,
        subject: "Daily Quote",
        text: `Hello ${user.firstName}`,
      };
      const res = await resend.emails.send(emaildata);
      console.log(user.email, res.id);
    });
  } catch (err) {
    console.log(err);
  }
};

export default defer.cron(dummyFetcher, "0 * * * *");
