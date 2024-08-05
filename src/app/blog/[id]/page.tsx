import { useRouter } from "next/router";

interface Post {
  id: string;
  title: string;
  content: string;
  date: string;
}

const posts: { [key: string]: Post } = {
  "1": { id: "1", title: "Artikel Pertama", content: "Konten artikel pertama...", date: "2024-08-05" },
  "2": { id: "2", title: "Artikel Kedua", content: "Konten artikel kedua...", date: "2024-08-06" },
};

export default function Post() {
  const router = useRouter();
  const { id } = router.query;
  const post = posts[id as string];

  if (!post) {
    return <div>Artikel tidak ditemukan</div>;
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600 mb-8">{post.date}</p>
      <div className="prose">{post.content}</div>
    </div>
  );
}
