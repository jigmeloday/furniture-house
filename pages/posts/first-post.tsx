import { getPost } from '@/libs/posts';

export async function getStaticProps() {
   const post = await getPost('firstpost.json');
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