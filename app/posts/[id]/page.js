export default function Post({ params }) {
  const { id } = params

  return (
    <section className="flex flex-col text-center text-3xl mt-7">
      <h1>This is the post {id}</h1>
    </section>
  )
}
