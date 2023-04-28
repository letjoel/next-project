import React from 'react'
import LikeButton from '../components/LikeButton/LikeButton'

const fetchPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts').then((response) =>
    response.json()
  )
}

const ListOfPosts = async () => {
  const posts = await fetchPosts()

  return posts.slice(0, 5).map((post) => (
    <article className="flex flex-col m-5 gap-2" key={post.id}>
      <h2 className="font-bold text-2xl">{post.title}</h2>
      <p>{post.body}</p>
      <LikeButton />
    </article>
  ))
}

export default ListOfPosts
