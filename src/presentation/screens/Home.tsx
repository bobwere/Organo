import { useState } from "react";
import leaf from "../../assets/images/leaf.png";
import vegetable from "../../assets/images/vegetable.png";
import chef from "../../assets/images/chef.png";
import dish from "../../assets/images/dish.png";
import star from "../../assets/images/star.svg";
import driver from "../../assets/images/driver.png";

const menu = ["Home", "Delivery", "Pricing", "FAQs", "Contact"];

export const Home = () => {
  const [currentTab, setCurrentTab] = useState<string>(menu[0]);

  return (
    <div className="w-full min-h-screen font-sans text-gray-900 bg-gradient-to-br from-transparent to-green-100">
      {/* navigation bar */}
      <nav className="flex justify-between items-center py-8 px-6 mx-auto max-w-screen-xl md:px-12 lg:px-16 xl:px-24">
        <a
          href="wwww.google.com"
          className="text-3xl md:text-4xl font-bold tracking-wide"
        >
          Organ<span className="text-green">o</span>
        </a>

        <div className="hidden md:flex items-center">
          <ul className="flex space-x-8">
            {menu.map((menuItem) => (
              <li
                onClick={(e) => setCurrentTab(menuItem)}
                className={`text-lg md:text-base lg:text-lg font-bold group ${
                  currentTab === menuItem ? "text-green" : ""
                } cursor-pointer`}
              >
                {menuItem}
              </li>
            ))}
          </ul>

          <button className="ml-12 flex justify-center items-center h-12 px-7 font-medium text-white bg-green rounded-xl hover:shadow-lg hover:shadow-green-200 transition-shadow duration-300 whitespace-nowrap">
            Get started
          </button>
        </div>
      </nav>

      {/* body */}
      <div className="flex flex-wrap-reverse gap-y-24 justify-between py-12 px-6 mx-auto max-w-screen-xl sm:px-8 md:px-12 lg:px-16 xl:px-24">
        {/* first half */}
        <div className="relative z-10 md:w-1/2 w-full">
          <img
            className="absolute top-0 right-0 md:-top-4 md:-right-8 w-24 h-auto"
            src={leaf}
            alt="leaf"
          />
          <span className="flex items-center px-1 text-xl text-green">
            <span className=" font-bold">100% Organic food</span>
            <img className="w-auto h-8" src={vegetable} alt="veggies" />
          </span>

          <h1 className="pt-8 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight whitespace-nowrap">
            Healthy Lifestyle <br />
            is your only <br />
            <span className="whitespace-nowrap text-green">
              {" "}
              unfair advantage{" "}
            </span>
          </h1>

          <p className="pt-8 sm:text-lg max-w-md text-xl font-medium text-gray-600 leading-relaxed">
            Choose healthy habits with Organo daily meal prepared by our expert
            nutritionist and chef
          </p>

          <div className="pt-8 flex items-center ">
            <button className="flex justify-center items-center h-12 px-7 font-medium text-white bg-green rounded-xl hover:shadow-lg hover:shadow-green-200 transition-shadow duration-300 whitespace-nowrap">
              Get started
            </button>
            <button className="ml-10 flex justify-center items-center h-12 px-7 font-medium text-gray-900 bg-transparent border border-gray-900 rounded-xl hover:shadow-lg hover:shadow-gray-300 transition-shadow duration-300 whitespace-nowrap">
              Explore menu
            </button>
          </div>

          <div className="flex mt-20 items-start">
            <img className="w-48" src={chef} alt="" />
            <div className=" mt-14">
              <h5 className="font-bold text-2xl">Chef of the month</h5>
              <h2 className="font-medium text-xl text-gray-700">
                People loved this
              </h2>
              <h1 className="font-bold text-xl text-green mt-10">
                80+ famous dishes
              </h1>
            </div>
          </div>
        </div>

        {/* second half */}
        <div className="relative md:w-1/2 w-full flex flex-col justify-between">
          <div className="relative self-center">
            <img
              className=" w-11/12 lg:w-full h-auto drop-shadow-2xl self-center lg:self-end"
              src={dish}
              alt=""
            />
            {/* floating happy customer */}
            <div className="absolute right-0 lg:-right-6 top-0 lg:top-28 bg-white/80 rounded-2xl backdrop-blur-xl px-10 py-4 shadow-lg shadow-green/20">
              <div className="flex items-center -space-x-2">
                {[1, 2, 3].map((item) => (
                  <img
                    className="h-14 w-14 rounded-full border-4 border-white"
                    src={require(`../../assets/images/avatar-${item}.jpeg`)}
                    alt=""
                  />
                ))}
              </div>
              <h2 className="mt-4 font-bold text-xl ">Happy customers</h2>
              <div className="flex items-center text-gray-600 leading-relaxed">
                <img className=" h-5 w-5" src={star} alt="star" />
                <span className="pl-1 pt-1">4.9 (+2.5k Ratings)</span>
              </div>
            </div>

            {/* floating fast delvery left */}
            <div className="absolute flex bg-white rounded-2xl pr-6 pt-4 shadow-lg shadow-green/20 left-0 bottom-0">
              <img className="w-auto h-20" src={driver} alt="" />
              <div className="ml-4">
                <h6 className="mt-4 font-bold text-xl">Fast Delivery</h6>
                <p className="text-base text-gray-600 font-medium leading-relaxed">
                  30mins delivery
                </p>
              </div>
            </div>
          </div>

          <div className="hidden md:flex justify-end space-x-1 font-bold text-xl">
            <span>Powered by Thunder Fueler</span>
          </div>
        </div>
      </div>
    </div>
  );
};
