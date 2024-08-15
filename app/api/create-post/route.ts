import { NextResponse } from "next/server";
import type { Database } from "../../../lib/types";
import { createClient } from "@/lib/supabase-server";

export async function POST(request: Request) {
  const supabase = createClient<Database>();
  const { title, content } = await request.json();

  const { error } = await supabase.from("posts").insert({ title, content });

  if (error) {
    console.error(error);
    return NextResponse.json({ error: "Error creating post" }, { status: 500 });
  }

  return NextResponse.json({ message: "Post created successfully" });
}
