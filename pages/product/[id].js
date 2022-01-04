import React from 'react'
import { useRouter } from 'next/router'

const productItem = () => {
  const { query: { id }} = useRouter()

  return (
    <div>
      This a page for product: {id} {/* The id needs to match with the file name */}
    </div>
  )
}

export default productItem