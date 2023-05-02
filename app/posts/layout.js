export default function PostsLayout({ children }) {
  return (
    <section className="flex flex-col text-center mt-7">
      <h1>Posts List</h1>
      {children}
    </section>
  )
}
