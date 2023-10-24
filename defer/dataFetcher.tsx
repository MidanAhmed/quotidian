import { db } from "@/db";
import { defer } from "@defer/client";
import axios from "axios";
import DailyQuote from "@/emails/DailyQuote";
import { currentUTCHour } from "@/lib/dayjs";
import { render } from "@react-email/components";
const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
};

const dataFetcher = async () => {
  try {
    const currhour = currentUTCHour();
    console.log(currhour);

    const { data } = await axios.get("https://api.quotable.io/quotes/random");

    const users = await db.user.findMany({
      where: {
        isSub: true,
        prefHour: {
          equals: currhour,
        },
      },
    });

    for await (const user of users) {
      const emaildata = {
        from: "Quotidian <onboarding@resend.dev>",
        to: user.email,
        subject: "Daily Quote",
        html: render(
          DailyQuote({
            firstName: user.firstName || "",
            content: data[0].content,
            author: data[0].author,
          }),
          {
            pretty: true,
          }
        ),
      };
      const res = await axios.post(
        "https://api.resend.com/email",
        JSON.stringify(emaildata),
        { headers: headers }
      );
      console.log(user.email, res.data.id);
    }
  } catch (err) {
    console.log(err);
  }
};

export default defer.cron(dataFetcher, "0 * * * *");
