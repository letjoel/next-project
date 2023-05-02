'use client'

import { useState } from 'react'

const LikeButton = () => {
  const [liked, setLike] = useState(false)

  return (
    <button
      className="w-24 p-1 bg-slate-400 rounded-md m-2"
      onClick={() => setLike(!liked)}
    >
      {liked ? 'Unlike' : 'Like'}
    </button>
  )
}

export default LikeButton
