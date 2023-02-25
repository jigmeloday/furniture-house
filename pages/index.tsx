import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>
        My Blog
      </h1>
      <ul>
        <li>
          <Link href='/posts/first-post '>
            Post
          </Link>
        </li>
      </ul>
    </div>
  )
}
