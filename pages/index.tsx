import { getSlug } from "@/libs/posts"
import Link from "next/link";

export async function getStaticProps() {
  const slugs = await getSlug();
  return{
    props: {
      paths: slugs.map((slug) => slug), 
    fallback: false
    }
}
}

export default function Home(props: any) {
  console.log(props.paths)
  return (
    <div>
      <h1>
        My Blog
      </h1>
      <ul>
      {
        props.paths.map((path: any, index: number) => 
        <li key={index}>
          <Link href={`/posts/${path}`}>
          {path}
          </Link>
        </li>)
      }
      </ul>
    </div>
  )
}
