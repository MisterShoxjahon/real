import React from "react";
import fib from "../assets/icons/fib.svg";
import Footercall from "../Arraycalls/Footercall";
import phone from "../assets/icons/phone.svg";
import supergood from "../assets/icons/super.svg";
import lightning from "../assets/icons/lightning.svg";
import telegram from "../assets/icons/telegram.svg";
import facebook from "../assets/icons/facebook.svg";
import wk from "../assets/icons/WK.svg";

const Footer = () => {
  return (
    <footer className="container">
      <div data-aos="fade-up"  className="lg:mt-[50px] mt-[80px] flex flex-col lg:flex-row lg:justify-between">
        <div>
          <div>
            <img src={fib} alt={fib} />
          </div>
          <div className="flex flex-col space-y-3 lg:flex-row space-x-10">
            <h3 className="font-[700] text-[16px] text-black">
              Калорийность и состав
            </h3>
            <h3 className="font-[700] text-[16px] text-black">
              Правовая информация
            </h3>
          </div>
          <div className="pt-[12px] lg:pt-[2px]">
            <h3 className="font-[700] text-[16px] text-black">Мы в соцсетях</h3>
          </div>
          <Footercall />
          <div className="pt-[46px] mb-[10px]">
            <h3 className="font-semibold text-black text-[14px] opacity-[80%]">
              YaBao Все праав защищены © 2021
            </h3>
          </div>
        </div>

        <div>
          <div>
            <h1 className="font-[700] text-[24px] text-black">Остались вопросы? А мы всегда на связи:</h1>
          </div>
          <div className="flex items-center gap-[30px] mt-[33px]">
            <button className="w-[101px] h-[52px] flex justify-center items-center rounded-[13px] bg-white hover:shadow-xl">
              <img src={phone} alt={phone} />
            </button>
            <button className="w-[101px] h-[52px] flex justify-center items-center rounded-[13px] bg-white hover:shadow-xl">
              <img src={supergood} alt={supergood} />
            </button>
            <button className="w-[101px] h-[52px] flex justify-center items-center rounded-[13px] bg-white hover:shadow-xl">
              <img src={lightning} alt={lightning} />
            </button>
            <button className="w-[101px] h-[52px] flex justify-center items-center rounded-[13px] bg-white hover:shadow-xl">
              <img src={telegram} alt={telegram} />
            </button>
          </div>
          <div className="flex items-center gap-[30px] mt-[25px]">
            <button className="w-[101px] h-[52px] flex justify-center items-center rounded-[13px] bg-white hover:shadow-xl">
                <img src={facebook} alt={facebook} />
                </button>
                <button className="w-[101px] h-[52px] flex justify-center items-center rounded-[13px] bg-white hover:shadow-xl">
                <img src={wk} alt={wk} />
                </button>
                <button className="flex justify-center items-center w-[216px] h-[52px] rounded-[13px] bg-white hover:shadow-xl">
                    <button className="font-[700] text-[13px] text-black">Написать нам</button>
                </button>
          </div>
          <div className="lg:flex items-end gap-[80px]">
          <div className="mt-[48px]">
            <span className="font-[700] text-[30px] text-yellow">8 499 391-84-49</span>
          </div>
          <div className="mt-[20px]">
          <div className="w-[180px] h-[42px] bg-white rounded-[28px] hover:shadow-xl flex justify-center items-center">
            <button className="text-[#696F7A] font-[700] text-[14px]">Заказать звонок</button>
          </div>  
          </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
