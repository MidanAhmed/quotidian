import { db } from "@/db";
import axios from "axios";
import { Resend } from "resend";
import { DailyQuote } from "@/emails/DailyQuote";
import { currentUTCHour, currentUTCTimestamp } from "@/lib/dayjs";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const { data } = await axios.get("https://api.quotable.io/quotes/random");

    let currHour = currentUTCHour();

    const users = await db.user.findMany({
      where: {
        isSub: true,
        prefHour: {
          gte: currHour,
          lt: currHour + 1,
        },
      },
    });

    users.forEach(async (user) => {
      console.log(user.email);
      await resend.emails.send({
        from: "onboarding@resend.dev",
        to: user.email,
        subject: "Daily Quote",
        react: DailyQuote({
          firstName: user.firstName || "",
          content: data[0].content,
          author: data[0].author,
        }),
      });
    });
    return Response.json(users);
  } catch (err) {
    console.log(err);
  }
}
