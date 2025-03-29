import React from 'react'
import restarantImg from '../assets/restaurant.png';
import chatapp from '../assets/chatapp.png';
import stock from '../assets/stock.png';
function Projects() {
  return (
    <section className="w-fill px-4 lg:px-0 py-24" id='Projects'>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-center font-semibold mb-12">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <a href="" className="hover:-translate-y-2 hover:shadow-xl border border-gray-100 dark:border-gray-900 rounded-lg transition-all duration-200">
            <div className="rounded-lg">
              <img src={restarantImg} alt="" className="w-full h-52 object-cover rounded-lg" />
              <div className="px-4 py-2.5">
                <h2 className="text-lg font-semibold">Restaurant Table Booking</h2>
                <p className="text-base text-gray-900 dark:text-gray-400 font-medium">Responsive Restaurant table booking website using React, NodeJs and Tailwind CSS.</p>
              </div>
            </div>
          </a>
          <a href="" className="hover:-translate-y-2 hover:shadow-xl border border-gray-100 dark:border-gray-900 rounded-lg transition-all duration-200">
            <div className="rounded-lg">
              <img src={chatapp} alt="" className="w-full h-52 object-cover rounded-lg" />
              <div className="px-4 py-2">
                <h2 className="text-lg font-semibold">Tak to AI</h2>
                <p className="text-base text-gray-900 dark:text-gray-400 font-medium">App using React Native and firebase authentication that allow users to connect with AI.</p>
              </div>
            </div>
          </a>
          <a href="" className="hover:-translate-y-2 hover:shadow-xl border border-gray-100 dark:border-gray-900 rounded-lg transition-all duration-200">
            <div className="rounded-lg">
              <img src={stock} alt="" className="w-full h-52 object-cover rounded-lg" />
              <div className="px-4 py-2">
                <h2 className="text-lg font-semibold">Stock Market Trend Prediction</h2>
                <p className="text-base text-gray-900 dark:text-gray-400 font-medium">A project using Python and yahoo finance api for data integration of Nifty-fifty and sensex that allow to understant the market analyse the trend and predict the tomorrow price outcome with accuracy of 87%.</p>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className=""></div>
    </section>
  )
}

export default Projects