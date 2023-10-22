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
    await dataFetcher();
    return NextResponse.json({ result: "ok" });
  } catch (err) {
    console.log(err);
  }
}
