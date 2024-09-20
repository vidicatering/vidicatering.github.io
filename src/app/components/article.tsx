import type { Blog } from "@prisma/client";

const Article = ({ blog }: { blog: Blog }) => {
  return (
    <div>
      <h1>Edit Blog</h1>
      <input type="text" value={blog.title} />
      <textarea value={blog.content} />
      <button type="submit">Update Blog</button>
    </div>
  );
};

export default Article;
