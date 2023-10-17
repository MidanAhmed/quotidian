import { db } from "@/db";
import { defer } from "@defer/client";
import axios from "axios";
import { Resend } from "resend";
import DailyQuote from "@/emails/DailyQuote";

const resend = new Resend(process.env.RESEND_API_KEY);

const dataFetcher = async () => {
  try {
    const { data } = await axios.get("https://api.quotable.io/quotes/random");

    const users = await db.user.findMany({
      where: {
        isSub: true,
      },
    });

    console.log(data);

    users.forEach(async (user) => {
      console.log(user);
      await resend.sendEmail({
        from: "quotidian@email.com",
        to: [user.email],
        subject: "Daily Quote",
        react: (
          <DailyQuote
            firstName={user.firstName || ""}
            content={data[0].content}
            author={data[0].author}
          />
        ),
      });
    });
  } catch (err) {
    console.log(err);
  }
};

export default defer.cron(dataFetcher, "0 * * * *");
