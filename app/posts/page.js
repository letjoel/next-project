import React from 'react'
import ListOfPosts from './ListOfPosts'

const Posts = async () => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center lg:flex-col font-mono text-sm lg:flex">
        <h1>Posts Title</h1>
        <p>Posts section text</p>
        <ListOfPosts />
      </div>
    </section>
  )
}

export default Posts
