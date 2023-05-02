export default function PostsLayout({ children }) {
  return (
    <section className="flex flex-col text-center mt-7">
      <small>Home &bull; Posts</small>
      {children}
    </section>
  )
}
