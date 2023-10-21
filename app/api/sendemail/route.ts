import { db } from "@/db";
import axios from "axios";
import { Resend } from "resend";
import { DailyQuote } from "@/emails/DailyQuote";
import { currentUTCHour, currentUTCTimestamp } from "@/lib/dayjs";
import { render } from "@react-email/components";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
  try {
    const { data } = await axios.get("https://api.quotable.io/quotes/random");
    let currHour = currentUTCHour();

    const users = await db.user.findMany({
      where: {
        isSub: true,
        prefHour: {
          // gte: currHour,
          // lt: (currHour + 1) % 24,
          gte: 1,
          lt: 3,
        },
      },
    });

    users.forEach(async (user) => {
      console.log(user.email, currHour);
      const emaildata = {
        from: "onboarding@resend.dev",
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
    return Response.json(users);
  } catch (err) {
    console.log(err);
  }
}
