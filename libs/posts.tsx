import { readFile } from 'fs/promises'

export async function getPost(slug: any) {
    const data = await readFile(`content/posts/${slug}`, 'utf-8');
    return JSON.parse(data)
}