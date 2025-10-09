"use client"
import { ProductType } from '@/types'
import React from 'react'

type Props = {
   
}

const ProductCard = ({ product}:{ product:ProductType}) => {
  return (
    <div>
        {product.name}
    </div>
  )
}

export default ProductCard