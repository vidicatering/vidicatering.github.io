import Link from "next/link";

interface Post {
  id: string;
  title: string;
  date: string;
}

const posts: Post[] = [
  { id: "1", title: "Artikel Pertama", date: "2024-08-05" },
  { id: "2", title: "Artikel Kedua", date: "2024-08-06" },
];

export default function Blog() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="mb-4">
            <Link href={`/blog/${post.id}`} className="text-2xl text-blue-500">
              {post.title}
            </Link>
            <p className="text-gray-600">{post.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
