import userAuth from "@/lib/auth/userAuth";
import { NextResponse } from "next/server";

export async function GET() {
  const res = await userAuth();

  if (res.status !== 200) {
    return NextResponse.json({ error: res.message }, { status: res.status });
  }

  return NextResponse.json({ status: 200, data: "Success" });
}
