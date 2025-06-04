import React from 'react'
import Drinkscard from '../components/Drinkscard'
import first from '../assets/images/suv1.jpeg'
import second from '../assets/images/suv2.png'
import third from '../assets/images/suv3.png'
import forth from '../assets/images/suv4.jpg'
import fifth from '../assets/images/suv5.jpg'
import sixth from '../assets/images/suv6.png'

const Drinks = () => {
  return (
    <section className='container'>
        <div className='lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 grid grid-cols-1 space-y-5 mt-[50px]'>
            <Drinkscard id={1} image={first} />
            <Drinkscard id={2} image={second} />
            <Drinkscard id={3} image={third} />
            <Drinkscard id={4} image={forth} />
            <Drinkscard id={5} image={fifth} />
            <Drinkscard id={6} image={sixth} />
        </div>
    </section>
  )
}

export default Drinks
