import { NextResponse } from "next/server";
import { getPayloadClient } from "../../../../lib/payload";

const GOALS = new Set([
  "new-website",
  "marketing-campaign",
  "seo",
  "social-media",
  "full-retainer",
]);
const BUDGETS = new Set(["under-2000", "2000-5000", "5000-10000", "10000-plus"]);

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as {
      fullName?: string;
      businessName?: string;
      email?: string;
      whatsappNumber?: string;
      primaryGoal?: string;
      monthlyBudget?: string;
      message?: string;
    };

    if (
      !body.fullName?.trim() ||
      !body.businessName?.trim() ||
      !body.email?.trim() ||
      !body.whatsappNumber?.trim() ||
      !body.message?.trim() ||
      !body.primaryGoal ||
      !body.monthlyBudget
    ) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    if (!GOALS.has(body.primaryGoal) || !BUDGETS.has(body.monthlyBudget)) {
      return NextResponse.json({ error: "Invalid selection values." }, { status: 400 });
    }

    const payload = await getPayloadClient();
    await payload.create({
      collection: "contact-submissions",
      data: {
        fullName: body.fullName.trim(),
        businessName: body.businessName.trim(),
        email: body.email.trim(),
        whatsappNumber: body.whatsappNumber.trim(),
        primaryGoal: body.primaryGoal,
        monthlyBudget: body.monthlyBudget,
        message: body.message.trim(),
        source: "/contact",
      },
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Failed to submit contact form." }, { status: 500 });
  }
}
