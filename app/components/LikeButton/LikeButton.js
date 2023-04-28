'use client'

import { useState } from 'react'

const LikeButton = () => {
  const [liked, setLike] = useState(false)

  return (
    <button
      className="w-24 p-2 bg-slate-400 rounded-md"
      onClick={() => setLike(!liked)}
    >
      {liked ? 'Unlike' : 'Like'}
    </button>
  )
}

export default LikeButton
