import Header from "../components/Header";
import Footer from "../components/Footer";
import BlogPost from "../components/BlogPost";
import type { Database } from "../lib/types";
import { createClient } from "@/lib/supabase-server";

export const revalidate = 60;

export default async function Home() {
  const supabase = createClient<Database>();

  const { data: blogPosts } = await supabase
    .from("posts")
    .select("*")
    .order("created_at", { ascending: false });

  const { data: homeInfo } = await supabase
    .from("home_info")
    .select("*")
    .single();

  return (
    <div className="container max-w-3xl mx-auto p-4 bg-white border-2 border-black shadow-brutal">
      <Header />
      <main className="mt-3">
        <section className="max-w-xl mx-auto mb-8 sm:flex sm:justify-between">
          <div>
            <h2 className="text-3xl text-center text-fuchsia mb-4 shadow-brutal-text">
              About Me
            </h2>
            <p className="whitespace-pre-line">{homeInfo?.about}</p>
          </div>
          <div>
            <h2 className="text-3xl text-center text-fuchsia mb-4 shadow-brutal-text">
              Links
            </h2>
            <div className="flex flex-col">
              <a
                href={homeInfo?.github}
                className="text-blue hover:text-red underline cursor-pointer"
                target="_blank"
              >
                GitHub
              </a>
              <a
                href={homeInfo?.threads}
                className="text-blue hover:text-red underline cursor-pointer"
                target="_blank"
              >
                Threads
              </a>
              <a
                href={homeInfo?.kakao}
                className="text-blue hover:text-red underline cursor-pointer"
                target="_blank"
              >
                카카오 1:1 채팅
              </a>
              <a
                href={`mailto:${homeInfo?.email}`}
                className="text-blue hover:text-red underline cursor-pointer"
                target="_top"
              >
                {homeInfo?.email}
              </a>
            </div>
          </div>
        </section>
        <section className="max-w-xl mx-auto">
          <h2 className="text-3xl text-center text-fuchsia mb-4 shadow-brutal-text">
            Projects
          </h2>
        </section>
        <section className="max-w-xl mx-auto">
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
