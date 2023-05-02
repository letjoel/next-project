import Link from 'next/link'

const fetchSinglePost = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60
    }
  }).then((response) => response.json())
}

export default async function Post({ children, params }) {
  const { id } = params
  const post = await fetchSinglePost(id)

  return (
    <article className="flex flex-col text-center mt-7">
      <h1 className="text-xl text-teal-400">{post.title}</h1>
      <p>{post.body}</p>
      <Link href={`/posts/${id}/comments`} className="text-red-300 mt-3 mb-2">
        See comments
      </Link>
      {children}
    </article>
  )
}
