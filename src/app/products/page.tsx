import ProductList from '@/components/ProductList'
import React from 'react'

const ProductsPage = async ({searchParams}:{searchParams:Promise<{category:string}>}) => {
  const category = (await searchParams).category;
  console.log((await searchParams).category)
  return (
    <div>
      <ProductList category={category} params='productsPage'/>
    </div>
  )
}

export default ProductsPage