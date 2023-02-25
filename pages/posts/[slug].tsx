import { getPost } from '@/libs/posts';

export async function getStaticPaths() {
    return{
        paths: [
            {params: { slug: 'first-post' }},
            {params: { slug: 'second-post' }}
        ], 
        fallback: false
    }
}

export async function getStaticProps(context: any ) {
    console.log(context.params.slug)
   const post = await getPost(`${context.params.slug}.json`);
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