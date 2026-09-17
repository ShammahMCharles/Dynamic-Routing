import { Link } from "react-router-dom";
import { posts } from "../lib/post";

export default function BlogPage() {
  return (
    <div>
      <h1>My Blog</h1>

      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>

          <Link to={`/blog/${post.slug}`}>
            Read Post
          </Link>
        </div>
      ))}
    </div>
  );
}