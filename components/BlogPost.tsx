interface BlogPostProps {
  post: {
    title: string;
    content: string;
    // Add other fields as needed (e.g., author, date)
  };
}

const BlogPost = ({ post }: BlogPostProps) => {
  return (
    <article className="bg-white p-6 rounded-lg shadow-md mb-4">
      <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />{" "}
      {/* Sanitize content on the server */}
    </article>
  );
};

export default BlogPost;
