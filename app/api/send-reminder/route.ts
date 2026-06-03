import { NextRequest, NextResponse } from "next/server";
import {
  sendPaymentReminder,
  getLimaDayOfMonth,
  CLIENT,
} from "@/lib/reminder-email";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  const secret = process.env.CRON_SECRET;
  const authHeader = request.headers.get("authorization");

  if (!secret || authHeader !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const day = getLimaDayOfMonth();
  const dueDay = CLIENT.dueDay;
  const advanceDay = dueDay - 3;

  const results: Record<string, unknown> = { day, dueDay };

  if (day === advanceDay) {
    const res = await sendPaymentReminder("advance");
    results.advance = res;
  }

  if (day === dueDay) {
    const res = await sendPaymentReminder("due");
    results.due = res;
  }

  if (day !== advanceDay && day !== dueDay) {
    results.skipped = true;
  }

  return NextResponse.json(results);
}
