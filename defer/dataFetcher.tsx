import { db } from "@/db";
import { defer } from "@defer/client";
import axios from "axios";
import DailyQuote from "@/emails/DailyQuote";
import { currentUTCHour } from "@/lib/dayjs";
import { render } from "@react-email/components";

const dataFetcher = async () => {
  try {
    const { data } = await axios.get("https://api.quotable.io/quotes/random");
    let currHour = currentUTCHour();

    const users = await db.user.findMany({
      where: {
        isSub: true,
        prefHour: {
          gte: currHour,
          lt: (currHour + 1) % 24,
        },
      },
    });

    users.forEach(async (user) => {
      console.log(user.email, currHour);
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
      axios.post("https://api.resend.com/email", emaildata, {
        headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}` },
      });
    });
  } catch (err) {
    console.log(err);
  }
};

export default defer.cron(dataFetcher, "0 * * * *");