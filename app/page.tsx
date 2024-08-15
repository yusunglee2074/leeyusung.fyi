import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BlogPost from "../components/BlogPost";
import type { Database } from "../lib/types";

export const revalidate = 60;

export default async function Home() {
  const supabase = createServerComponentClient<Database>({ cookies });

  const { data: blogPosts } = await supabase
    .from("posts")
    .select("*")
    .order("created_at", { ascending: false });

  const { data: homeInfo } = await supabase
    .from("home_info")
    .select("*")
    .single();

  return (
    <div className="container mx-auto m-4 bg-white border-2 border-black shadow-brutal">
      <Header />
      <main>
        <section className="mb-8">
          <h2 className="text-3xl text-center text-fuchsia mb-4 shadow-brutal-text">
            About Me
          </h2>
          <p>{homeInfo?.about}</p>
        </section>
        <section className="mb-8">
          <h2 className="text-3xl text-center text-fuchsia mb-4 shadow-brutal-text">
            Links
          </h2>
          <div className="flex justify-center space-x-4">
            <a
              href={homeInfo?.github}
              className="text-blue hover:text-red underline"
            >
              GitHub
            </a>
            <a
              href={homeInfo?.linkedin}
              className="text-blue hover:text-red underline"
            >
              LinkedIn
            </a>
          </div>
        </section>
        <section>
          <h2 className="text-3xl text-center text-fuchsia mb-4 shadow-brutal-text">
            Blog Posts
          </h2>
          {blogPosts?.map((post) => <BlogPost key={post.id} post={post} />)}
        </section>
      </main>
      <Footer />
    </div>
  );
}
