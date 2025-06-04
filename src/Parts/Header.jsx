import React, { useState } from "react";
import fib from "../assets/icons/fib.svg";
import yandex from "../assets/icons/yandex.svg";
import star from "../assets/icons/star.svg";
import dote from "../assets/icons/dote.svg";
import { Link } from "react-router-dom";
import categoriesIcon from "../assets/icons/categoties.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const navLinks = [
    { path: "/", label: "Дом" },
    { path: "/пицца", label: "Пицца" },
    { path: "/паста", label: "Паста" },
    { path: "/салаты", label: "Салаты" },
    { path: "/супы", label: "Супы" },
    { path: "/напитки", label: "Напитки" },
    { path: "/сток", label: "Сток" },
    { path: "/акция", label: "Акция" },
    { path: "/локация", label: "Локация" },
  ];

  return (
    <section className="container">
      <div className="mt-[23px] flex items-center justify-between">
        <div className="flex items-center">
          <img src={fib} alt="logo" />

          <button onClick={handleToggle} className="ml-4 lg:hidden">
            <img src={categoriesIcon} alt="menu" />
          </button>
        </div>

        <div className="hidden lg:flex items-center space-x-12">
          <div>
            <h3 className="font-bold text-[17px] text-lightblack">
              Доставка пасты <span className="text-yellow">Москва</span>
            </h3>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <img src={yandex} alt="yandex" />
              <h3 className="font-bold text-[17px] text-lightblack">
                Яндекс еда
              </h3>
              <img src={dote} alt="dot" />
              <div className="flex items-center space-x-2">
                <span className="font-bold text-[17px] text-lightblack">
                  4.8
                </span>
                <img src={star} alt="rating" />
              </div>
            </div>
            <div className="headertwo">
              <div className="flex items-center space-x-2">
                <h3 className="font-bold text-[17px] text-lightblack">
                  Время доставки
                </h3>
                <img src={dote} alt="dot" />
                <h3 className="font-bold text-[17px] text-lightblack">
                  от 31 мин
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex items-center space-x-8">
          <button className="font-semibold text-[17px] bg-gray w-[180px] text-[#696F7A] h-[57px] rounded-[28px]">
            Заказать звонок
          </button>
          <span className="font-bold text-[26px] text-yellow">
            8 499 391-84-49
          </span>
        </div>
      </div>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } lg:flex lg:items-center lg:justify-between lg:pt-[25px]`}
      >
        <div className="categories flex flex-col lg:flex-row items-start lg:items-center space-y-3 lg:space-y-0 lg:space-x-11">
          {navLinks.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className="font-semibold text-[18px] text-lightblack"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-8 mt-4 lg:mt-0">
          <button className="font-semibold text-[16px] text-[#696F7A]">
            Войти
          </button>
          <button className="font-semibold text-[18px] text-lightblack bg-yellow w-[160px] rounded-[8px] h-[42px]">
            Корзина / 0
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
