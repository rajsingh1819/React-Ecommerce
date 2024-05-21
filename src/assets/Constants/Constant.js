// Banner
// import image0 from "../images/Banner/Smartphone Flash Sale - Banner Template.jpg"
import image1 from "../images/Banner/Smartphone Flash Sale - Banner Template (1).jpg";
import image3 from "../images/Banner/Smartphone Flash Sale - Banner Template (3).jpg";
import image6 from "../images/Banner/Smartphone Flash Sale - Banner Template (6).jpg";
import image10 from "../images/Banner/Smartphone Flash Sale - Banner Template (10).jpg";
import image16 from "../images/Banner/Smartphone Flash Sale - Banner Template (16).jpg";

// allMobileImage
import image18 from "../images/allMobileImage/Apple iPhone 14 (128GB, Red).png";
import image19 from "../images/allMobileImage/Apple-iPhone-11-PNG-Clipart.png";
import image20 from "../images/allMobileImage/Apple.png";
import image21 from "../images/allMobileImage/Iphone13 pro.png";
import image24 from "../images/allMobileImage/Moto-G62-5G-.png";
import image26 from "../images/allMobileImage/OnePlus-9.png";
import image33 from "../images/allMobileImage/onePlus 10 pro 5G.png";
import image34 from "../images/allMobileImage/Samsung Galaxy.png";

import img1 from "../images/newMobiles/iPhone 13.png";
import img2 from "../images/newMobiles/Samsung-Galaxy.png";
import img3 from "../images/newMobiles/oneplus-12-.png";
import img4 from "../images/newMobiles/motorola g34 5G.png";
import img5 from "../images/newMobiles/Oppo A54.png";
import img6 from "../images/newMobiles/google.png";
import img7 from "../images/newMobiles/iQOO 11.png";
import img8 from "../images/newMobiles/Lava Z66.png";

// allFashionImage

// Hoodie
import image35 from "../images/allFashionImage/Hoodie -1.png";
import image36 from "../images/allFashionImage/Hoodie -2.png";
// import image37 from "../images/allFashionImage/Hoodie -3.png"

import image38 from "../images/allFashionImage/Hoodie -4.png";
import image39 from "../images/allFashionImage/Hoodie -5.png";

//Shirt
import image40 from "../images/allFashionImage/Shirt-1.png";
import image41 from "../images/allFashionImage/Shirt-2.png";
import image42 from "../images/allFashionImage/Shirt-3.png";
import image45 from "../images/allFashionImage/Shirt-6.png";
import image46 from "../images/allFashionImage/Shirt-7.png";

//Tshirt
import image47 from "../images/allFashionImage/Tshirt-1.png";
import image48 from "../images/allFashionImage/Tshirt-14.png";
import image49 from "../images/allFashionImage/Tshirt-3.png";
import image51 from "../images/allFashionImage/Tshirt-5.png";
import image52 from "../images/allFashionImage/Tshirt-6.png";
import image53 from "../images/allFashionImage/Tshirt-7.png";
import image54 from "../images/allFashionImage/Tshirt-8.png";
import image55 from "../images/allFashionImage/Tshirt-9.png";

//banner
import img11 from "../image1.webp";
import img12 from "../image2.webp";
import img13 from "../image3.webp";
import img14 from "../image4.webp";
import img15 from "../image5.webp";
import img16 from "../image6.webp";

// Payment Types
import googlePay from "../images/GPay.png";
import phonePay from "../images/phonePay.png";
import cashPay from "../images/cashAndDelevry.png";
import upiPay from "../images/upi.webp";

//services
import {
  FaCarSide,
  FaCheckCircle,
  FaHeadphonesAlt,
  FaWallet,
} from "react-icons/fa";

const paymentData = [
  { id: 61, image: googlePay, name: "Google Pay", statue: true },
  { id: 62, image: phonePay, name: "Phone Pay", statue: true },

  { id: 63, image: upiPay, name: "UPI Pay", statue: true },
  { id: 64, image: cashPay, name: "Cash and Delivery", statue: false },
];

const NavData = [
  { id: 1, path: "mobile", name: "Mobiles", image: img1 },
  { id: 2, path: "fashion", name: "Fashions", image: image51 },
];

// slider

const sliderData = [
  { id: 1, Image: image6 },
  { id: 2, Image: image16 },
  { id: 3, Image: image3 },
  { id: 4, Image: image10 },
  { id: 5, Image: image1 },
];

const mobileBanner = [
  { id: 1, Image: img11 },
  { id: 2, Image: img12 },
  { id: 3, Image: img13 },
  { id: 4, Image: img14 },
  { id: 5, Image: img15 },
  { id: 6, Image: img16 },
];

const services = [
  {
    id: 1,
    icon: <FaCheckCircle size={40} style={{ color: "red" }} />,
    title: "Safe Money",
    desc: "30 Days Money Back",
  },

  {
    id: 2,
    icon: <FaWallet size={40} style={{ color: "red" }} />,
    title: "Secure Payment",
    desc: "All Payment Secure",
  },
  {
    id: 3,
    icon: <FaHeadphonesAlt size={40} style={{ color: "red" }} />,
    title: "Online Support 24/7",
    desc: "Technical Support 24/7",
  },
  {
    id: 4,
    icon: <FaCarSide size={40} style={{ color: "red" }} />,
    title: "Less Shipping Chagres",
    desc: "Free Shipping for Specific Order",
  },
];

const allProductData = [
  {
    id: "26",
    title: "Hoodie 1",
    type: "Hoodie",
    price: 99,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
        message: "good product",
      },
      {
        name: "romo lew",
        rating: 4.8,
        message: "good product",
      },
    ],
    avgRating: 4.5,
    Image: image35,
    category: "fashion",

    featured: true,
    productType: "old",
  },
  {
    id: "27",
    title: "Hoodie 2",
    type: "Hoodie",
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
        message: "good product",
      },
    ],
    avgRating: 4.5,
    Image: image36,
    category: "fashion",
    featured: true,
    productType: "old",
  },
  {
    id: "28",
    title: "Tshirt 1",
    type: "T-shirt",
    price: 99,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
        message: "good product",
      },
    ],
    avgRating: 4.5,
    Image: image47,
    category: "fashion",
    featured: true,
    productType: "old",
  },
  {
    id: "29",
    title: "Tshirt 2",
    type: "T-shirt",
    price: 99,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
        message: "good product",
      },
    ],
    avgRating: 4.5,
    Image: image48,
    category: "fashion",
    featured: true,
    productType: "old",
  },
  {
    id: "30",
    title: "Tshirt 3",
    type: "T-shirt",
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
        message: "good product",
      },
    ],
    avgRating: 4.5,
    Image: image53,
    category: "fashion",
    featured: false,
    productType: "old",
  },
  {
    id: "31",
    title: "Shirt 1",
    type: "Shirt",

    price: 99,

    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
        message: "good product",
      },
    ],
    avgRating: 4.5,
    Image: image40,
    category: "fashion",
    featured: false,
    productType: "old",
  },
  {
    id: "32",
    title: "Shirt 2",
    type: "Shirt",
    price: 99,

    desc: "this is the description",
    reviews: [],
    avgRating: 4.5,
    Image: image45,
    category: "fashion",
    featured: false,
    productType: "old",
  },
  {
    id: "33",
    title: "Shirt 3",
    type: "Shirt",
    price: 99,

    desc: "this is the description",
    reviews: [],
    avgRating: 4.5,
    Image: image46,
    category: "fashion",
    featured: false,
    productType: "old",
  },

  {
    id: "18",
    title: "iPhone 14",
    type: "apple",
    price: 99,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
        message: "good product",
      },
      {
        name: "romo lew",
        rating: 4.8,
        message: "good product",
      },
    ],
    avgRating: 4.5,
    Image: image18,
    category: "mobile",
    featured: true,
    productType: "old",
  },
  {
    id: "19",
    title: "iPhone 11",
    type: "apple",
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
        message: "good product",
      },
    ],
    avgRating: 4.5,
    Image: image19,
    category: "mobile",
    featured: true,
    productType: "old",
  },
  {
    id: "20",
    title: "onePlus 10 pro ",
    type: "oneplus",
    price: 99,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
        message: "good product",
      },
    ],
    avgRating: 4.5,
    Image: image33,
    category: "mobile",
    featured: true,
    productType: "old",
  },
  {
    id: "21",
    title: "MotoG62 5G",
    type: "motorola",
    price: 99,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
        message: "good product",
      },
    ],
    avgRating: 4.5,
    Image: image24,
    category: "mobile",
    featured: true,
    productType: "old",
  },
  {
    id: "22",
    title: "Iphone13 pro",
    type: "apple",
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
        message: "good product",
      },
    ],
    avgRating: 4.5,
    Image: image21,
    category: "mobile",
    featured: false,
    productType: "old",
  },
  {
    id: "23",
    title: "OnePlus-9",
    type: "oneplus",

    price: 99,

    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
        message: "good product",
      },
    ],
    avgRating: 4.5,
    Image: image26,
    category: "mobile",
    featured: false,
    productType: "old",
  },
  {
    id: "24",
    title: "Apple 13",
    type: "apple",
    price: 99,

    desc: "this is the description",
    reviews: [],
    avgRating: 4.5,
    Image: image20,
    category: "mobile",
    featured: false,
    productType: "old",
  },
  {
    id: "25",
    title: "Samsung Galaxy",
    type: "samsung",
    price: 99,

    desc: "this is the description",
    reviews: [],
    avgRating: 4.5,
    Image: image34,
    category: "mobile",
    featured: false,
    productType: "old",
  },
  {
    id: "01",
    title: "Apple iPhone 14",
    type: "apple",
    price: 99,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
        message: "good product",
      },
      {
        name: "romo lew",
        rating: 4.8,
        message: "good product",
      },
    ],
    avgRating: 4.5,
    Image: img1,
    category: "mobile",
    productType: "new",

    featured: true,
  },
  {
    id: "02",
    title: "Apple iPhone 11",
    type: "apple",
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
        message: "good product",
      },
    ],
    avgRating: 4.5,
    Image: img2,
    category: "mobile",
    productType: "new",
    featured: true,
  },
  {
    id: "03",
    title: "onePlus 10 pro 5G",
    type: "oneplus",
    price: 99,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
        message: "good product",
      },
    ],
    avgRating: 4.5,
    Image: img3,
    category: "mobile",
    productType: "new",
    featured: true,
  },
  {
    id: "04",
    title: "Moto-G62-5G",
    type: "motorola",
    price: 99,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
        message: "good product",
      },
    ],
    avgRating: 4.5,
    Image: img4,
    featured: true,
    productType: "new",
    category: "mobile",
  },
  {
    id: "05",
    title: "Iphone13 pro",
    type: "apple",
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
        message: "good product",
      },
    ],
    avgRating: 4.5,
    Image: img5,
    featured: false,
    category: "mobile",
    productType: "new",
  },

  {
    id: "06",
    title: "Apple 13",
    type: "apple",
    price: 99,

    desc: "this is the description",
    reviews: [],
    avgRating: 4.5,
    Image: img6,
    category: "mobile",
    featured: false,
    productType: "new",
  },
  {
    id: "07",
    title: "Samsung Galaxy",
    type: "samsung",
    price: 99,

    desc: "this is the description",
    reviews: [],
    avgRating: 4.5,
    Image: img7,
    featured: false,
    category: "mobile",
    productType: "new",
  },
  {
    id: "08",
    title: "Redmi 11",
    type: "Redmi",
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
        message: "good product",
      },
    ],
    avgRating: 4.5,
    Image: img8,
    featured: true,
    category: "mobile",
    productType: "new",
  },
  {
    id: "14",
    title: "Tshirt(1)",
    type: "T-shirt",
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
        message: "good product",
      },
    ],

    avgRating: 4.5,
    Image: image49,
    category: "fashion",
    featured: false,
    productType: "new",
  },

  {
    id: "15",
    title: "Tshirt(2)",
    type: "T-shirt",
    price: 99,

    desc: "this is the description",
    reviews: [],
    avgRating: 4.5,
    Image: image52,
    category: "fashion",
    featured: false,
    productType: "new",
  },
  {
    id: "16",
    title: "Tshirt(3)",
    type: "T-shirt",
    price: 99,

    desc: "this is the description",
    reviews: [],
    avgRating: 4.5,
    Image: image54,
    category: "fashion",
    featured: false,
    productType: "new",
  },
  {
    id: "17",
    title: "Tshirt(4)",
    type: "T-shirt",
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
        message: "good product",
      },
    ],
    avgRating: 4.5,
    Image: image55,
    category: "fashion",
    featured: true,
    productType: "new",
  },

  {
    id: "09",
    title: "Hoodie-1",
    type: "Hoodie",
    price: 99,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
        message: "good product",
      },
      {
        name: "romo lew",
        rating: 4.8,
        message: "good product",
      },
    ],
    avgRating: 4.5,
    Image: image38,
    category: "fashion",
    productType: "new",
    featured: true,
  },
  {
    id: "10",
    title: "Hoodie-2",
    type: "Hoodie",
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
        message: "good product",
      },
    ],
    avgRating: 4.5,
    Image: image39,
    category: "fashion",
    featured: true,
    productType: "new",
  },
  {
    id: "11",
    title: "Shirt-1",
    type: "Shirt",
    price: 99,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
        message: "good product",
      },
    ],
    avgRating: 4.5,
    Image: image41,
    category: "fashion",
    featured: true,
    productType: "new",
  },
  {
    id: "13",
    title: "Shirt-2",
    type: "Shirt",
    price: 99,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
        message: "good product",
      },
    ],
    avgRating: 4.5,
    Image: image42,
    category: "fashion",
    featured: true,
    productType: "new",
  },
];

const Offers = {
  deliveryCharges: 10,
  taxCharge: 2,
};

export {
  services,
  sliderData,
  NavData,
  allProductData,
  paymentData,
  Offers,
  mobileBanner,
};
