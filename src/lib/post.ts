export interface Post {
  id: number;
  slug: string;
  title: string;
  content: string;
}

export const posts: Post[] = [

  {
    id: 1,
    slug: "my-first-post",
    title: "My First Post",
    content: "Welcome to my first blog post!",
  },
  {
    id: 2,
    slug: "learning-react",
    title: "Learning React",
    content: "React makes building user interfaces much easier.",
  },
  {
    id: 3,
    slug: "why-i-love-coding",
    title: "Why I Love Coding",
    content: "Coding allows me to build things and solve problems.",
  },
]