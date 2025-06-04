import React from 'react'

const Direction = ({image}) => {
  return (
    <div className='rounded-[50%] w-[31px] h-[31px] bg-yellow flex items-center justify-center'>
        <img src={image} alt={image}/>
    </div>
  )
}

export default Direction
