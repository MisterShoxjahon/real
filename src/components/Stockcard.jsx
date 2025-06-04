import React from 'react'

const Stockcard = ({image, id}) => {
  return (
    <button data-aos="fade-up" id={id} className='bg-white w-[330px] lg:w-[350px] h-[391px] rounded-[14px] hover:shadow-2xl'>
      <img src={image} alt={image}/>
      <h2 className='font-[700] text-[20px] text-black pl-[20px] pt-[20px]'>Дарим кибер-призы</h2>
      <h5 className='w-[340px] -ml-[10px] lg:pl-[20px] pt-[7px] font-normal text-[13px] text-[#797979] '>Вот так ачивка! Закажите Кибер-комбо и получите доступ к играм от MY.GAMES, а еще кокосовый батончик и шоколадное печенье «Cyber» от Bite. А также станьте автоматическим участником розыгрыша игровых ключей и больших пицц 29 июня.
      </h5>
      <div className='pt-[20px] pl-[20px]'>
      <div className='w-[159px] h-[45px] flex justify-center items-center rounded-[8px] bg-yellow'>
        <button className='font-[700] text-[14px] text-lightblack'>Посмотреть</button>
      </div>
      </div>
    </button>
  )
}

export default Stockcard
