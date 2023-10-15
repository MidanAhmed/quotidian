import { Resend } from "resend";
import { DailyQuote } from "@/emails/DailyQuote";
import { User } from "@prisma/client";
import { defer } from "@defer/client";

const resend = new Resend(process.env.RESEND_API_KEY);

type Quote = {
  content: String;
  author: String;
};

async function sendEmail(user: User, quoteData: Quote) {
  try {
    await resend.emails.send({
      from: "quotidian@email.com",
      to: user.email,
      subject: "Daily Quote",
      react: DailyQuote({ user: user, quoteData: quoteData }),
    });
  } catch (err) {
    console.log(err);
  }
}

export default defer(sendEmail);
