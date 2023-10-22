import { db } from "@/db";
import { defer } from "@defer/client";
import axios from "axios";
import DailyQuote from "@/emails/DailyQuote";
import { currentUTCHour, currentUTCTimestamp } from "@/lib/dayjs";
import { render } from "@react-email/components";

const dataFetcher = async () => {
  try {
    const { data } = await axios.get("https://api.quotable.io/quotes/random");

    const users = await db.user.findMany({
      where: {
        isSub: true,
        prefHour: {
          equals: currentUTCHour(),
        },
      },
    });

    users.forEach(async (user) => {
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
      const res = await axios.post("https://api.resend.com/email", emaildata, {
        headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}` },
      });
      console.log(user.email, currentUTCTimestamp(), res.data.id);
    });
  } catch (err) {
    console.log(err);
  }
};

export default defer.cron(dataFetcher, "0 * * * *");
