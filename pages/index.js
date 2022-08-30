
import React from 'react'
import { Product, FooterBanner, HeroBanner } from '../components'
import {client} from '../lib/client'

const Home = ({products, bannerData, footerData}) => {
  return (
    <>
        <HeroBanner heroBanner = {bannerData.length && bannerData[0]}/>
        <div className='products-heading'>
          <h2>Top Products</h2>  
          
        </div>  
        <div className='products-container'>
          {products?.map(product=><Product key={product._id} product={product}/>)}
        </div>
        <FooterBanner footerBanner={footerData && footerData[0]}/>
    </>
  )
}

export const getServerSideProps = async()=>{
  const query = '*[_type =="product"]'
  const products = await client.fetch(query)
  const queryBanner = '*[_type == "banner"]'
  const bannerData = await client.fetch(queryBanner)
  const queryFooterBanner = '*[_type == "footerBanner"]'
  const footerData = await client.fetch(queryFooterBanner)

  return{props:{products, bannerData, footerData}}
}

export default Home
