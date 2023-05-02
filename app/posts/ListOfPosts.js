import React from 'react'
import Link from 'next/link'

const fetchPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'no-store'
  }).then((response) => response.json())
}

const ListOfPosts = async () => {
  const posts = await fetchPosts()

  return posts.slice(0, 5).map((post) => (
    <article className="flex flex-col m-5 gap-2" key={post.id}>
      <Link href="/posts/[id]" as={`/posts/${post.id}`}>
        <h2 className="font-bold text-2xl">{post.title}</h2>
        <p>{post.body}</p>
      </Link>
    </article>
  ))
}

export default ListOfPosts
