import { Resend } from "resend";
import { DailyQuote } from "@/emails/DailyQuote";
import { User } from "@prisma/client";

const resend = new Resend(process.env.RESEND_API_KEY);

type Quote = {
  content: String;
  author: String;
};

async function sendEmail(user: User, quoteData: Quote) {
  await resend.emails.send({
    from: "quotidian@email.com",
    to: user.email,
    subject: "Daily Quote",
    react: DailyQuote(user, quoteData),
  });
}

export default sendEmail;
