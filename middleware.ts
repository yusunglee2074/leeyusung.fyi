import { NextRequest, NextResponse } from "next/server";
import { createClient } from "./lib/supabase-server";

export async function middleware(request: NextRequest) {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();

  if (error) {
    console.error("Error fetching session:", error);
  }

  if (!data.user) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  return NextResponse.next();
}
export const config = {
  matcher: ["/admin"],
};
