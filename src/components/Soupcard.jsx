import React from "react";

const Soupcard = ({ image, id }) => {
  return (
    <button data-aos="fade-up" className='mt-[46px] rounded-[14px] w-[300px] h-[471px] bg-white hover:shadow-2xl pt-[10px] pl-[10px]'>
    <div className='flex justify-center'>
    <img className='-mt-[40px]' src={image} alt={image}/>
    </div>
    <h1 className='font-bold text-[24px] w-[255px] pl-[10px] text-[#797979]'>С креветками и трюфелями</h1>
    <h5 className='text-[#686466] w-[254px] pl-[10px] pt-[14px] font-normal'>Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г
    </h5>
    <div className='flex items-center justify-around pt-[10px]'>
        <span className='font-bold text-[22px] text-lightblack'>от 600 ₽</span>
        <div className='w-[126px] h-[36px] bg-yellow flex items-center justify-center rounded-[8px]'>
            <button className='font-bold text-white text-[14px]'>В корзину</button>
        </div>
    </div>
</button>
  );
};

export default Soupcard;
