
import React from 'react'
import {
  FlippingCard,
  FlippingCardBack,
  FlippingCardFront,
} from "react-ui-cards";
import Footer from './Footer';



const Flip = () => {
  return (
    <>
    <div className="justify-center items-center flex ">
    <div className="grid sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 ">
      <div className=" sm:mt-12 justify-center items-center flex">
        <FlippingCard
          className="justify-center items-center flex "
          style={{ height: "460px",  width: '100%', maxWidth: '400px' }}>
          <FlippingCardBack>
            <div className="relative ">
              <img src="./ios2.jpg" alt=""  className="w-full h-auto justify-center items-center flex" />
            </div>
            <p className="mx-auto mt-5 text-center">
              A Comprehensive Guide to Hiring Developers for Your Startup
              Hire developers for startups who will contribute to its vision
              and goals!
            </p>
          </FlippingCardBack>
          <FlippingCardFront>
            <div className="h-96">
              <img
                src="./ios.gif"
                className='w-full h-64 object-cover justify-center items-center flex'
                alt=""
              />
              <button className="btn absolute top-2 right-2 mx-2 bg-[#e4e4e4] rounded-lg sm:mt-2 p-1">
                View all
              </button>
              <p className="mx-auto font-bold text-xl text-center mt-3">
                A Comprehensive Guide to Hiring Developers for Your Startup
              </p>
              <p className="text-center mt-2">
                
                Hire developers for startups who will contribute to its
                vision and goals!
              </p>
            </div>
          </FlippingCardFront>
        </FlippingCard>
      </div>
      <div className=" sm:mt-12 justify-center items-center flex">
        <FlippingCard  style={{ height: "460px",  width: '100%', maxWidth: '400px' }}>
          <FlippingCardBack>
            <div className="relative">
              <img src="./computer.jpg" alt=""  className="w-full h-auto"   />
            </div>
            <p className="mx-auto mt-5">
              Understand the differences between a freelance and an in-house
              web developer to hire the best talents in the industry.
            </p>{" "}
          </FlippingCardBack>
          <FlippingCardFront>
            <div className="h-96">
              <img
                src="./code.gif"
                className='w-full h-64 object-cover'
                alt=""
              />
              <button className="btn absolute top-2 right-2 mx-2 bg-[#e4e4e4] rounded-lg sm:mt-2 p-1">
                View all
              </button>
              <h2 className=" me-6 mt-2 text-xl font-bold">
                Freelance vs. In-House Developers: Which Should You Choose?
              </h2>
              <p className="sm:pt-5">
                Understand the differences between a freelance and an
                in-house web developer to hire the best talents in the
                industry.
              </p>
            </div>
          </FlippingCardFront>
        </FlippingCard>
      </div>
      <div className=" sm:mt-12 justify-center items-center flex">
        <FlippingCard
          className=""
           style={{ height: "460px",  width: '100%', maxWidth: '400px' }}>
        
          <FlippingCardBack>
            <div className="relative">
              <img src="./sm.jpg" alt=""  className="w-full h-auto"/>
            </div>
            <p className="mx-auto mt-5">
              A Comprehensive Guide to Hiring Developers for Your Startup
              Hire developers for startups who will contribute to its vision
              and goals!
            </p>{" "}
          </FlippingCardBack>
          <FlippingCardFront>
            <div className="h-96">
              <img
                src="./dg.gif"
                className='w-full h-64 object-cover'
                alt=""
              />
              <button className="btn absolute top-2 right-2 mx-2 bg-[#e4e4e4] rounded-lg sm:mt-2 p-1">
                View all
              </button>
              <p className="mx-auto font-bold text-xl ">
                A Comprehensive Guide to Hiring Developers for Your Startup
              </p>
              <p className="sm:pt-5">
                
                Hire developers for startups who will contribute to its
                vision and goals!
              </p>
            </div>
          </FlippingCardFront>
        </FlippingCard>
      </div>
      <div className=" sm:mt-12 justify-center items-center flex">
        <FlippingCard  style={{ height: "460px",  width: '100%', maxWidth: '400px' }}>
          <FlippingCardBack>
            <div className="relative">
              <img src="./web.jpg" alt="" className="w-full h-64 object-cover" />
            </div>
            <p className="mx-auto mt-5">
              Understand the differences between a freelance and an in-house
              web developer to hire the best talents in the industry.
            </p>
          </FlippingCardBack>
          <FlippingCardFront>
            <div className="h-96">
              <img
                src="./wd.gif"
                className='w-full h-64 object-cover'
                alt=""
              />
              <button className="btn absolute top-2 right-2 mx-2 bg-[#e4e4e4] rounded-lg sm:mt-2 p-1">
                View all
              </button>
              <h2 className=" me-6 mt-2 text-xl font-bold">
                Freelance vs. In-House Developers: Which Should You Choose?
              </h2>
              <p className="sm:pt-5">
                Understand the differences between a freelance and an
                in-house web developer to hire the best talents in the
                industry.
              </p>
            </div>
          </FlippingCardFront>
        </FlippingCard>
      </div>
      <div className=" sm:mt-12 justify-center items-center flex">
        <FlippingCard
          className=""
           style={{ height: "460px",  width: '100%', maxWidth: '400px' }}>
        
          <FlippingCardBack>
            <div className="relative">
              <img src="./ap.jpg" alt="" className='w-full h-64 object-cover' />
            </div>
            <p className="mx-auto mt-5">
              A Comprehensive Guide to Hiring Developers for Your Startup
              Hire developers for startups who will contribute to its vision
              and goals!
            </p>{" "}
          </FlippingCardBack>
          <FlippingCardFront>
            <div className="h-96">
              <img
                src="./ad.gif"
                className='w-full h-64 object-cover'
                alt=""
              />
              <button className="btn absolute top-2 right-2 mx-2 bg-[#e4e4e4] rounded-lg sm:mt-2 p-1">
                View all{" "}
              </button>
              <p className="mx-auto font-bold text-xl">
                A Comprehensive Guide to Hiring Developers for Your Startup
              </p>
              <p className="sm:pt-5">
                {" "}
                Hire developers for startups who will contribute to its
                vision and goals!
              </p>
            </div>
          </FlippingCardFront>
        </FlippingCard>
      </div>
      <div className=" sm:mt-12 justify-center items-center flex">
        <FlippingCard  style={{ height: "460px",  width: '100%', maxWidth: '400px' }}>
          <FlippingCardBack>
            <div className="relative">
              <img src="./bc.jpg" alt="" className='w-full h-auto' />
            </div>
            <p className="mx-auto mt-5">
              Understand the differences between a freelance and an in-house
              web developer to hire the best talents in the industry.
            </p>{" "}
          </FlippingCardBack>
          <FlippingCardFront>
            <div className="h-96">
              <img
                src="./tg.gif"
                className='w-full h-64 object-cover'
                alt=""
              />
              <button className="btn absolute top-2 right-2 mx-2 bg-[#e4e4e4] rounded-lg sm:mt-2 p-1">
                View all{" "}
              </button>
              <h2 className=" me-6 mt-2 text-xl font-bold">
                Freelance vs. In-House Developers: Which Should You Choose?
              </h2>
              <p className="sm:pt-5">
                Understand the differences between a freelance and an
                in-house web developer to hire the best talents in the
                industry.
              </p>
            </div>
          </FlippingCardFront>
        </FlippingCard>``
      </div>
      <div className="sm:mt-12 justify-center items-center flex">
        <FlippingCard  style={{ height: "460px",  width: '100%', maxWidth: '400px' }}>
          <FlippingCardBack>
            <div className="relative ">
              <img
                src="./tw.jpg"
                className='w-full h-64 object-cover'
                alt=""
              />
            </div>
            <p className="mx-auto mt-5">
              A Comprehensive Guide to Hiring Developers for Your Startup
              Hire developers for startups who will contribute to its vision
              and goals!
            </p>{" "}
          </FlippingCardBack>
          <FlippingCardFront>
            <div className="h-96">
              <img
                src="./twm.gif"
                className='w-full h-64 object-cover'
                alt=""
              />
              <button className="btn absolute top-2 right-2mx-2 bg-[#e4e4e4] rounded-lg sm:mt-2 p-1">
                View all{" "}
              </button>
              <h2 className=" me-6 mt-2 text-xl font-bold">
                Optimizing Mobile App Performance: Tips and Techniques
              </h2>
              <p className="sm:pt-5">
                "Optimize your mobile app’s performance to safeguard its
                features, ensure a positive user experience, and boost SEO.
                "
              </p>
            </div>
          </FlippingCardFront>
        </FlippingCard>
      </div>
    </div>
  </div>
  <Footer/>
 </>
  )
}

export default Flip;