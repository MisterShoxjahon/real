import React from 'react'

const Footercall = () => {
    const logos = [
        {
            name: 'YouTube',
            desc: 'Instagram'
        },
        {
            name: 'Facebook',
            desc: 'ВКонтакте'
        },
    ]
  return (
    <div className='flex items-center gap-[103px] pt-[15px]'>
      {logos.map((item, index) => {
        return(
            <div className='ml-[10%] mt-[32px]'> 
                <h4 className='font-semibold text-[16px] text-balance opacity-[70%]'>{item.name}</h4>
                <h4 className='font-semibold text-[16px] text-black opacity-[70%]'>{item.desc}</h4>
            </div>
        )
      })}
    </div>
  )
}

export default Footercall
