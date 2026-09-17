import { useParams } from "react-router-dom";
import { posts } from "../lib/post";

export default function BlogPostPage() {
  const { slug } = useParams();

  const post = posts.find((post) => post.slug === slug);

  if (!post) {
    return <h1>Post not found</h1>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}