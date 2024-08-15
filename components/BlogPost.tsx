import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

interface BlogPostProps {
  post: {
    title: string;
    content: string;
    created_at: string;
  };
}

const BlogPost = ({ post }: BlogPostProps) => {
  return (
    <article className="container bg-white p-2 rounded-lg mb-4 hover:bg-gray-200 cursor-pointer">
      <div className="flex justify-between">
        <h2 className="text-xl font-bold font-bold mb-2">{post.title}</h2>
        <span className="text-sm text-right">
          {dayjs(post.created_at).fromNow()}
        </span>
      </div>
      <p>{post.content.slice(0, 30)}</p>
    </article>
  );
};

export default BlogPost;
