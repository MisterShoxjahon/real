import React, { useState } from 'react'
import Pastecard from '../components/Pastecard'
import first from '../assets/images/pasta1.jpeg'
import second from '../assets/images/pasta2.jpg'
import third from '../assets/images/pasta3.jpg'
import forth from '../assets/images/pasta4.jpg'
import fifth from '../assets/images/pasta5.jpeg'
import sixth from '../assets/images/pasta6.jpeg'
import seventh from '../assets/images/pasta7.jpeg'
import eighth from '../assets/images/pasta8.jpeg'

const Pasta = () => {

  const [modal, setModal] = useState(false) 
  
  return (
    <section className='container'>
        <div className='grid grid-cols-1 space-y-8 mt-[50px] md:grid md:grid-cols-2 lg:grid lg:grid-cols-4'>
            <Pastecard id={1} image={first} />
            <Pastecard id={2} image={second} />
            <Pastecard id={3} image={third} />
            <Pastecard id={4} image={forth} />
            <Pastecard id={5} image={fifth} />
            <Pastecard id={6} image={sixth} />
            <Pastecard id={7} image={seventh} />
            <Pastecard id={8} image={eighth} />
        </div>
    </section>
  )
}

export default Pasta
