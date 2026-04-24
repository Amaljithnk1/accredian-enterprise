import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const LEADS_FILE = path.join(process.cwd(), "leads.json");

interface Lead {
  id: string;
  fullName: string;
  workEmail: string;
  companyName: string;
  teamSize: string;
  phone: string;
  message: string;
  submittedAt: string;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validate required fields
    const { fullName, workEmail, companyName, teamSize, phone, message } = body;

    if (!fullName || !workEmail || !companyName || !teamSize || !phone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(workEmail)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    const lead: Lead = {
      id: `lead_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
      fullName,
      workEmail,
      companyName,
      teamSize,
      phone,
      message: message || "",
      submittedAt: new Date().toISOString(),
    };

    // Read existing leads
    let leads: Lead[] = [];
    try {
      if (fs.existsSync(LEADS_FILE)) {
        const data = fs.readFileSync(LEADS_FILE, "utf-8");
        leads = JSON.parse(data);
      }
    } catch {
      leads = [];
    }

    // Add new lead
    leads.push(lead);

    // Write back
    fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2));

    return NextResponse.json(
      { success: true, message: "Lead captured successfully", id: lead.id },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    let leads: Lead[] = [];
    if (fs.existsSync(LEADS_FILE)) {
      const data = fs.readFileSync(LEADS_FILE, "utf-8");
      leads = JSON.parse(data);
    }
    return NextResponse.json({ leads, total: leads.length });
  } catch {
    return NextResponse.json({ leads: [], total: 0 });
  }
}
