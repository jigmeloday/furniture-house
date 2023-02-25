import { getPosts } from "@/libs/posts"
import Link from "next/link";

export async function getStaticProps() {
  const posts = await getPosts();
  return{
    props: {posts}
}
}

export default function Home(props: any) {
  console.log(props.posts)
  return (
    <div>
      <h1>
        My Blog
      </h1>
      <ol>
      {
        props.posts.map((path: any, index: number) => 
        <li key={index}>
          <Link href={`/posts/${path.slug}`}>
          {path.title}
          </Link>
        </li>)
      }
      </ol>
    </div>
  )
}
