import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FcRight } from "react-icons/fc";


const Category = () => {
  return (
    <div>
      <div className="">
        <div className="text-[40px] font-semibold flex justify-center font-dancing-script ">
          Category
        </div>
        <p className="flex justify-center font-semibold text-gray-500 m-5">
          Find What You Are Looking For
        </p>
      </div>

      <div classNameName="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-4 md:grid-rows-2 gap-5">

          <div className="relative overflow-hidden inline-block group rounded-xl ">
            <Image
              src="https://images.pexels.com/photos/5975980/pexels-photo-5975980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              height={500}
              width={500}
              alt="Image"
              className="w-full h-auto"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 flex justify-center items-center transition-opacity duration-300 group-hover:opacity-70 ">
              <span className="text-white text-[30px] font-semibold  transform -translate-x-full transition-transform duration-800 tracking-wider  group-hover:translate-x-0 uppercase">
                Your White Text
              </span>
            </div>
          </div>


          <div className="relative overflow-hidden inline-block group rounded-xl ">
            <Image
              src="https://images.pexels.com/photos/5975980/pexels-photo-5975980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              height={500}
              width={500}
              alt="Image"
              className="w-full h-auto"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 flex justify-center items-center transition-opacity duration-300 group-hover:opacity-70 ">
              <span className="text-white text-[30px] font-semibold  transform -translate-x-full transition-transform duration-800 tracking-wider  group-hover:translate-x-0 uppercase">
                Your White Text
              </span>
            </div>
          </div>

          <div className="relative overflow-hidden inline-block group rounded-xl ">
            <Image
              src="https://images.pexels.com/photos/5975980/pexels-photo-5975980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              height={500}
              width={500}
              alt="Image"
              className="w-full h-auto"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 flex justify-center items-center transition-opacity duration-300 group-hover:opacity-70 ">
              <span className="text-white text-[30px] font-semibold  transform -translate-x-full transition-transform duration-800 tracking-wider  group-hover:translate-x-0 uppercase">
                Your White Text
              </span>
            </div>
          </div>

        
          <div className="relative overflow-hidden inline-block group rounded-xl">
            <Image
              src="https://images.pexels.com/photos/5975980/pexels-photo-5975980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              height={500}
              width={500}
              alt="Image"
              className="w-full h-auto"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 flex justify-center items-center transition-opacity duration-300 group-hover:opacity-70">
              <span className="text-white text-[30px] font-semibold  transform -translate-x-full transition-transform duration-800 tracking-wider  group-hover:translate-x-0 uppercase">
                Your White Text
              </span>
            </div>
          </div>
          <div className="relative overflow-hidden inline-block group rounded-xl ">
            <Image
              src="https://images.pexels.com/photos/5975980/pexels-photo-5975980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              height={500}
              width={500}
              alt="Image"
              className="w-full h-auto"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 flex justify-center items-center transition-opacity duration-300 group-hover:opacity-70 ">
              <span className="text-white text-[30px] font-semibold  transform -translate-x-full transition-transform duration-800 tracking-wider  group-hover:translate-x-0 uppercase">
                Your White Text
              </span>
            </div>
          </div>
{/* 
        <Fade top>
          <div className="relative overflow-hidden inline-block group rounded-xl">
            <Image
              src="https://images.pexels.com/photos/5975980/pexels-photo-5975980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              height={500}
              width={500}
              alt="Image"
              className="w-full h-auto"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 flex justify-center items-center transition-opacity duration-300 group-hover:opacity-70">
              <span className="text-white text-[30px] font-semibold  transform -translate-x-full transition-transform duration-800 tracking-wider  group-hover:translate-x-0 uppercase">
                Your White Text
              </span>
            </div>
          </div>
        </Fade>
  */}

          <div className="relative overflow-hidden inline-block group rounded-xl">
            <Image
              src="https://images.pexels.com/photos/5975980/pexels-photo-5975980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              height={500}
              width={500}
              alt="Image"
              className="w-full h-auto"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 flex justify-center items-center transition-opacity duration-300 group-hover:opacity-70">
              <span className="text-white text-[30px] font-semibold  transform -translate-x-full transition-transform duration-800 tracking-wider  group-hover:translate-x-0 uppercase">
                Your White Text
              </span>
            </div>
          </div>
      </div>

      
      <div className="flex items-center justify-center flex-col pb-8">
        <div className="my-8 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </div>
          <Link href="/product">
            <button className=" rounded-xl p-4 px-6 flex font-semibold items-center justify-between gap-2 cursor-pointer border-2 border-blue-400 bg-blue-300 hover:bg-blue-200 transition-colors hover:shadow-2xl hover:shadow-blue-900 mb-8">
              <div className="font-bold">Explore</div>
              <div>
                <FcRight className="text-black" />
              </div>
            </button>
          </Link>
      </div>
    </div>
  );
};

export default Category;
