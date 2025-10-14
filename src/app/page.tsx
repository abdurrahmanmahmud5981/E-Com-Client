import ProductList from "@/components/ProductList"
import Image from "next/image"

const Homepage =  async ({searchParams}:{searchParams: Promise<{category:string}>}) => {

  const category = (await searchParams).category

  return (
    <div className=''>
      {/* Hero Slider */}
      <div className="relative aspect-[3/1] mb-12">
        <Image src={'/featured.png'} alt="Featured Product" fill />
      </div>
      {/* Product for Home Page */}
      <ProductList category={category} params="homePage"/>
    </div>
  )
}

export default Homepage