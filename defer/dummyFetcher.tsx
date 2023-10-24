import { db } from "@/db";
import { defer } from "@defer/client";
import axios from "axios";
import { currentUTCHour } from "@/lib/dayjs";

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

    users.forEach(async (user) => {
      const emaildata = {
        from: "Quotidian <onboarding@resend.dev>",
        to: user.email,
        subject: "Daily Quote",
        text: `Hello ${user.firstName}`,
      };
      const res = await axios.post("https://api.resend.com/email", emaildata, {
        headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}` },
      });
      console.log(user.email, res.data.id);
    });
  } catch (err) {
    console.log(err);
  }
};

export default defer.cron(dummyFetcher, "0 * * * *");
