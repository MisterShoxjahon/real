import React from 'react'
import Saladcard from '../components/Saladcard'
import first from '../assets/images/salat1.png'
import second from '../assets/images/salat2.jpeg'
import third from '../assets/images/salat3.jpeg'
import forth from '../assets/images/salat4.jpeg'
import fifth from '../assets/images/salat5.jpeg'
import sixth from '../assets/images/salat6.png'
import seventh from '../assets/images/salat7.png'
import eighth from '../assets/images/salat8.png'

const Salad = () => {
  return (
    <section className='container'>
        <div className='space-y-10 mt-[50px] grid grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-4'>
            <Saladcard id={1} image={first} />
            <Saladcard id={2} image={second} />
            <Saladcard id={3} image={third} />
            <Saladcard id={4} image={forth} />
            <Saladcard id={5} image={fifth} />
            <Saladcard id={6} image={sixth} />
            <Saladcard id={7} image={seventh} />
            <Saladcard id={8} image={eighth} />
        </div>
    </section>
  )
}

export default Salad
