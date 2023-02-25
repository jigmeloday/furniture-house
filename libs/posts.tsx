import { readFile, readdir } from 'fs/promises'

export async function getPost(slug: any) {
    const data = await readFile(`content/posts/${slug}`, 'utf-8');
    return JSON.parse(data)
}

export async function getSlug() {
    const file = await readdir('content/posts');
    return (
         file.filter((file) => file.endsWith('.json')).map((file) => file.slice(0, -5) )
    )
    
}