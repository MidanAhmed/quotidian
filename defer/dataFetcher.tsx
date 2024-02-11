import prisma from "@/lib/prisma";
import { defer } from "@defer/client";
import axios from "axios";
import DailyQuote from "@/emails/DailyQuote";
import { currentUTCHour } from "@/lib/dayjs";
import { render } from "@react-email/components";
import https from "https";
const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
};
const axiosAgent = new https.Agent({
  rejectUnauthorized: false,
});

const dataFetcher = async () => {
  try {
    const currhour = currentUTCHour();
    console.log(currhour);

    const { data } = await axios.get("https://api.quotable.io/quotes/random", {
      httpsAgent: axiosAgent,
    });

    const users = await prisma.user.findMany({
      where: {
        isSub: true,
        prefHour: {
          equals: currhour,
        },
      },
    });

    for await (const user of users) {
      const emaildata = {
        from: "Quotidian <daily@quotidian.cloud>",
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
        headers: headers,
      });
      console.log(user.email, res.data.id);
    }
  } catch (err) {
    console.log(err);
  }
};

export default defer.cron(dataFetcher, "0 * * * *");
