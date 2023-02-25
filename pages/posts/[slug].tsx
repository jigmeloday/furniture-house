import { getPost, getSlug } from '@/libs/posts';

export async function getStaticPaths() {
    const slugs = await getSlug();
    return{
        paths: slugs.map((slug) => ({
            params: {slug}
        })), 
        fallback: false
    }
}

export async function getStaticProps(context: any ) {
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