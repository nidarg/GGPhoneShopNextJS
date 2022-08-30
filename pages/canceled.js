import React from 'react';
import Link from 'next/link';




const Canceled = () => {
  
  return (
    <div className="empty-cart">
    <AiOutlineShopping size={150}/>
    <h3>Your shopping bag is empty</h3>
    <Link href='/'>
      <button type='button' className='btn' onClick = {()=>setShowCart(false)}>
        Continue Shopping
      </button>
    </Link>
  </div>
  )
}

export default Canceled
