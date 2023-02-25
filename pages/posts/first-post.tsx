import { readFile } from 'fs/promises'

export async function getStaticProps() {
    const data = await readFile('content/posts/firstpost.json', 'utf-8')
   const post = JSON.parse(data)
    return{
        props: {post}
    }
}
function FirstPost(props: any) {
    return(
        <>
            <h1>{props.post.title}</h1>
            <p>{props.post.body}</p>
        </>
    )
}

export default FirstPost;