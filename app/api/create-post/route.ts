import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { Database } from "../../../lib/types";

export async function POST(request: Request) {
  const supabase = createRouteHandlerClient<Database>({ cookies });
  const { title, content } = await request.json();

  const { data, error } = await supabase
    .from("posts")
    .insert({ title, content });

  if (error) {
    console.error(error);
    return NextResponse.json({ error: "Error creating post" }, { status: 500 });
  }

  return NextResponse.json({ message: "Post created successfully" });
}
