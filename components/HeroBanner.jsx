import React from 'react'
import Link from 'next/link'
import {urlFor} from '../sanity_ecommerce/lib/client'

const HeroBanner = ({heroBanner}) => {
  return (
    <div className='hero-banner-container'>
     <div className='hero-banner-first'>
        <div className='hero-banner-text'>
          <h3>{heroBanner.smallText}</h3>
          <h1>{heroBanner.midText}</h1>
          <h3>{heroBanner.largeText1}</h3>
        </div>
        
        <img src={urlFor(heroBanner.image)} alt="headphones" className='hero-banner-img' />
      </div>
     
     <div className='hero-banner-second'>
     <div className="desc">
        <h1>Description</h1>
        <p>{heroBanner.desc}</p>
      </div>
      <Link href={`/product/${heroBanner.product}`}>
        <button type='button' className='hero-banner-btn'>{heroBanner.buttonText}</button>
      </Link>
     
     </div>
    </div>
  )
}

export default HeroBanner
