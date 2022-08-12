
import React from 'react'
import { Product, FooterBanner, HeroBanner } from '../components'
import {client} from '../sanity_ecommerce/lib/client'

const Home = ({products, bannerData}) => {
  return (
    <>
        <HeroBanner heroBanner = {bannerData && bannerData[0]}/>
        <div className='products-heading'>
          <h2>Best Selling products</h2>  
          <p>Headphones for everything for everyone</p>
        </div>  
        <div className='products-container'>
          {products?.map(product=><Product key={product.id} product={product}/>)}
        </div>
        <FooterBanner/>
    </>
  )
}

export const getServerSideProps = async()=>{
  const query = '*[_type =="product"]'
  const products = await client.fetch(query)
  const queryBanner = '*[_type == "banner"]'
  const bannerData = await client.fetch(queryBanner)

  return{props:{products, bannerData}}
}

export default Home
