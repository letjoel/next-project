const fetchComments = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 60
    }
  }).then((response) => response.json())
}

export default async function Comment({ params }) {
  const { id } = params
  const comments = await fetchComments(id)

  return (
    <ul className="bg-slate-500 text-sm">
      {comments.map((comment) => (
        <li key={comment.id}>
          <h2 className="text-black p-8 ">{comment.name}</h2>
          <p>{comment.body}</p>
        </li>
      ))}
    </ul>
  )
}
