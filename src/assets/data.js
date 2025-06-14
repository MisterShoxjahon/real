import logo from './icon/logo.svg';
import yandexEdaIcon from './icon/yandex-eda.svg';
import starIcon from './icon/star.svg';

import slide1 from './images/hero-one.jpg';
import slide2 from './images/hero-two.jpg';

import prevIcon from './icon/prev.svg';
import nextIcon from './icon/next.svg';

import news_img from './icon/news-img.svg';

import pizza_img from './images/pizza.png';


import stock_img from './images/stock.jpg';

import delivery_icon from './icon/delivery.svg';

import visaIcon from './icon/visa.svg';
import paypalIcon from './icon/paypal.svg';
import masterIcon from './icon/master_card.svg';

import tgIcon from './icon/telegram.svg';
import fbIcon from './icon/facebook.svg';
import vkIcon from './icon/vk.svg';
import msIcon from './icon/messenjer.svg';
import spIcon from './icon/scipe.svg';
import wsIcon from './icon/whatsap.svg';

import plusIcon from './icon/plus.svg';
import minusIcon from './icon/minus.svg';
import closeIcon from './icon/close.svg';

import likeIcon from './icon/heart.svg';
import likeFillIcon from './icon/heart-fill.svg';

import arrowLeftIcon from './icon/arrow-left-circle-fill.svg'

import emptyIcon from './gift/empty.gif';

const pizza_data = [
    {
        id: 1,
        img: pizza_img,
        title: {
            ru: 'С креветками и трюфелями',
            en: 'With shrimp and truffles',
            uz: 'Krevetka va trufellar bilan'
        },
        description: {
            ru: 'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан. 350 г',
            en: 'Homemade fettuccine pasta, creamy sauce, shrimp, truffle oil, black pepper, parmesan. 350 g',
            uz: 'Uyda tayyorlangan fettuchine pasta, qaymoqli sous, krevetka, trufel yog‘i, qora murch, parmezan. 350 g'
        },
        price: 350,
        count: 1,
        category: {
            ru: 'Пицца',
            en: 'Pizza',
            uz: 'Pizza'
        }
    },
    {
        id: 2,
        img: pizza_img,
        title: {
            ru: 'С креветками и трюфелями',
            en: 'With shrimp and truffles',
            uz: 'Krevetka va trufellar bilan'
        },
        description: {
            ru: 'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан. 350 г',
            en: 'Homemade fettuccine pasta, creamy sauce, shrimp, truffle oil, black pepper, parmesan. 350 g',
            uz: 'Uyda tayyorlangan fettuchine pasta, qaymoqli sous, krevetka, trufel yog‘i, qora murch, parmezan. 350 g'
        },
        price: 350,
        count: 1,
        category: {
            ru: 'Пицца',
            en: 'Pizza',
            uz: 'Pizza'
        }
    },
    {
        id: 3,
        img: pizza_img,
        title: {
            ru: 'С креветками и трюфелями',
            en: 'With shrimp and truffles',
            uz: 'Krevetka va trufellar bilan'
        },
        description: {
            ru: 'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан. 350 г',
            en: 'Homemade fettuccine pasta, creamy sauce, shrimp, truffle oil, black pepper, parmesan. 350 g',
            uz: 'Uyda tayyorlangan fettuchine pasta, qaymoqli sous, krevetka, trufel yog‘i, qora murch, parmezan. 350 g'
        },
        price: 350,
        count: 1,
        category: {
            ru: 'Пицца',
            en: 'Pizza',
            uz: 'Pizza'
        }
    },
    {
        id: 4,
        img: pizza_img,
        title: {
            ru: 'С креветками и трюфелями',
            en: 'With shrimp and truffles',
            uz: 'Krevetka va trufellar bilan'
        },
        description: {
            ru: 'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан. 350 г',
            en: 'Homemade fettuccine pasta, creamy sauce, shrimp, truffle oil, black pepper, parmesan. 350 g',
            uz: 'Uyda tayyorlangan fettuchine pasta, qaymoqli sous, krevetka, trufel yog‘i, qora murch, parmezan. 350 g'
        },
        price: 350,
        count: 1,
        category: {
            ru: 'Пицца',
            en: 'Pizza',
            uz: 'Pizza'
        }
    },
    {
        id: 5,
        img: pizza_img,
        title: {
            ru: 'С креветками и трюфелями',
            en: 'With shrimp and truffles',
            uz: 'Krevetka va trufellar bilan'
        },
        description: {
            ru: 'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан. 350 г',
            en: 'Homemade fettuccine pasta, creamy sauce, shrimp, truffle oil, black pepper, parmesan. 350 g',
            uz: 'Uyda tayyorlangan fettuchine pasta, qaymoqli sous, krevetka, trufel yog‘i, qora murch, parmezan. 350 g'
        },
        price: 350,
        count: 1,
        category: {
            ru: 'Пицца',
            en: 'Pizza',
            uz: 'Pizza'
        }
    },
    {
        id: 6,
        img: pizza_img,
        title: {
            ru: 'С креветками и трюфелями',
            en: 'With shrimp and truffles',
            uz: 'Krevetka va trufellar bilan'
        },
        description: {
            ru: 'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан. 350 г',
            en: 'Homemade fettuccine pasta, creamy sauce, shrimp, truffle oil, black pepper, parmesan. 350 g',
            uz: 'Uyda tayyorlangan fettuchine pasta, qaymoqli sous, krevetka, trufel yog‘i, qora murch, parmezan. 350 g'
        },
        price: 350,
        count: 1,
        category: {
            ru: 'Пицца',
            en: 'Pizza',
            uz: 'Pizza'
        }
    },
    {
        id: 7,
        img: pizza_img,
        title: {
            ru: 'С креветками и трюфелями',
            en: 'With shrimp and truffles',
            uz: 'Krevetka va trufellar bilan'
        },
        description: {
            ru: 'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан. 350 г',
            en: 'Homemade fettuccine pasta, creamy sauce, shrimp, truffle oil, black pepper, parmesan. 350 g',
            uz: 'Uyda tayyorlangan fettuchine pasta, qaymoqli sous, krevetka, trufel yog‘i, qora murch, parmezan. 350 g'
        },
        price: 350,
        count: 1,
        category: {
            ru: 'Пицца',
            en: 'Pizza',
            uz: 'Pizza'
        }
    },
    {
        id: 8,
        img: pizza_img,
        title: {
            ru: 'С креветками и трюфелями',
            en: 'With shrimp and truffles',
            uz: 'Krevetka va trufellar bilan'
        },
        description: {
            ru: 'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан. 350 г',
            en: 'Homemade fettuccine pasta, creamy sauce, shrimp, truffle oil, black pepper, parmesan. 350 g',
            uz: 'Uyda tayyorlangan fettuchine pasta, qaymoqli sous, krevetka, trufel yog‘i, qora murch, parmezan. 350 g'
        },
        price: 350,
        count: 1,
        category: {
            ru: 'Пицца',
            en: 'Pizza',
            uz: 'Pizza'
        }
    }
]


export {
    logo,
    yandexEdaIcon,
    starIcon,
    slide1,
    slide2,
    prevIcon,
    nextIcon,
    news_img,
    pizza_data,
    stock_img,
    delivery_icon,
    visaIcon,
    paypalIcon,
    masterIcon,
    tgIcon,
    fbIcon,
    vkIcon,
    msIcon,
    spIcon,
    wsIcon,
    plusIcon,
    minusIcon,
    closeIcon,
    emptyIcon,
    likeIcon,
    likeFillIcon,
    arrowLeftIcon
}