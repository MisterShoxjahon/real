import React from 'react'
import Soupcard from '../components/Soupcard'
import first from '../assets/images/cupi1.png'
import second from '../assets/images/supi2.png'
import third from '../assets/images/supi3.png'
import forth from '../assets/images/supi4.png' 

const Soups = () => {
  return (
    <section className='container'>
        <div className='grid grid-cols-1 mt-[50px] space-y-8 md:grid md:grid-cols-2 lg:grid lg:grid-cols-4'>
            <Soupcard id={1} image={first} />
            <Soupcard id={2} image={second} />
            <Soupcard id={3} image={third} />
            <Soupcard id={4} image={forth} />
        </div>
    </section>
  )
}

export default Soups
