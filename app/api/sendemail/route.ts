import { db } from "@/db";
import axios from "axios";
import { Resend } from "resend";
import { DailyQuote } from "@/emails/DailyQuote";
import { currentUTCHour, currentUTCTimestamp } from "@/lib/dayjs";
import { render } from "@react-email/components";
import dataFetcher from "@/defer/dataFetcher";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
  try {
    const emaildata = {
      from: "onboarding@resend.dev",
      to: "ahmedmidan8@gmail.com",
      subject: "Daily Quote",
      text: `Hello user`,
    };
    const res = await axios.post("https://api.resend.com/email", emaildata, {
      headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}` },
    });
    console.log(emaildata.to, res.data.id);
    return NextResponse.json({ result: "ok", id: res.data.id });
  } catch (err) {
    console.log(err);
  }
}
