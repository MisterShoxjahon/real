import React from 'react'
import first from '../assets/images/combofirst.png'
import second from '../assets/images/combosecond.png'
import third from '../assets/images/combofifth.png'
import forth from '../assets/images/combothird.png'
import fifth from '../assets/images/comboforth.png'
import sixth from '../assets/images/combosixth.png'
import seventh from '../assets/images/comboseventh.png'
import eighth from '../assets/images/comboeighth.png'
import ninth from '../assets/images/comboninth.png'
import tenth from '../assets/images/combotenth.png'
import eleventh from '../assets/images/comboeleventh.png'
import Stockcard from '../components/Stockcard'

const Stock = () => {
  return (
    <section className='container'>
        <div className='lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 grid grid-cols-1 lg:ml-[30px] space-y-5 mt-[50px]'>
        <Stockcard id={1} image={first} />
        <Stockcard id={2} image={second} />
        <Stockcard id={3} image={forth} />
        <Stockcard id={4} image={third} />
        <Stockcard id={5} image={fifth} />
        <Stockcard id={6} image={sixth} />
        <Stockcard id={7} image={seventh} />
        <Stockcard id={8} image={eighth} />
        <Stockcard id={9} image={ninth} />
        <Stockcard id={10} image={tenth} />
        <Stockcard id={11} image={eleventh} />
        <Stockcard id={12} image={tenth} />
        </div>
    </section>
  )
}

export default Stock
