import React from 'react'
import newfood from '../assets/images/new.png'
import newmeat from '../assets/images/newmeat.png'
import pasta from '../assets/images/pastapizza.png'
import meat from '../assets/images/meat.png'
import PizzaCard from '../components/PizzaCard'

const Pizzas = () => {
  return (
    <section className='container'>
      <div className='mt-[60px]'>
      <div>
                <h3 className='font-bold text-[32px] text-yellow'>Паста</h3>
            </div>
            <div className='-ml-[30px] space-y-12 m-[1px]'>
            <div className='grid grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-4'>
                <PizzaCard image={newfood}/>
                <PizzaCard image={newmeat}/>
                <PizzaCard image={pasta}/>
                <PizzaCard image={meat}/>
            </div>
            <div className='grid grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-4'>
                <PizzaCard image={newfood}/>
                <PizzaCard image={newmeat}/>
                <PizzaCard image={pasta}/>
                <PizzaCard image={meat}/>
            </div>
            </div>
      </div>
    </section>
  )
}

export default Pizzas
