import React from 'react'
import { Link } from 'react-scroll'

function Services() {
  return (
    <section className="w-fill px-4 lg:px-0 py-24" id='Services'>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-center font-semibold mb-12">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="py-4 px-4 space-y-4 hover:scale-105 hover:shadow-xl rounded-lg border border-gray-100 dark:border-gray-900 transition duration-200">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-medium">Front-End</span>
            </div>
            <div className="">
              <h2 className="text-xl font-semibold">Frontend Solutions</h2>
              <p className="text-base text-gray-900 dark:text-gray-400 font-medium">
              I have strong frontend development skills, specializing in React, Tailwind CSS, and JavaScript. I focus on creating responsive, user-friendly interfaces with clean and maintainable code. My experience includes building e-commerce platforms, portfolio websites, and interactive UI components while ensuring performance optimization and seamless user experiences.
              </p>
              <button className='font-bolder bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 rounded w-24 p-1 m-2'> <a href="https://www.coursera.org/account/accomplishments/verify/AQNMVCE4R5EA" target='_blank'>certificate</a></button>
            </div>
          </div>
          <div className="py-4 px-4 space-y-4 hover:scale-105 hover:shadow-xl rounded-lg border border-gray-100 dark:border-gray-900 transition duration-200">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-medium">Back-End</span>
            </div>
            <div className="">
              <h2 className="text-xl font-semibold">Robust Backend Systems</h2>
              <p className="text-base text-gray-900 dark:text-gray-400 font-medium">
              I specialize in backend development using Node.js, Express, and MongoDB, building secure and scalable RESTful APIs, handling authentication, database management, and optimizing server performance for seamless functionality.
              </p>
              <button className='font-bolder bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 rounded w-24 p-1 m-2'> <a href="https://www.coursera.org/account/accomplishments/verify/VRMYRYC3CVT6" target='_blank'>certificate</a></button>
            </div>
          </div>
          <div className="py-4 px-4 space-y-4 hover:scale-105 hover:shadow-xl rounded-lg border border-gray-100 dark:border-gray-900 transition duration-200">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-medium">Data Analytics</span>
            </div>
            <div className="">
              <h2 className="text-xl font-semibold">User-Centric Design</h2>
              <p className="text-base text-gray-900 dark:text-gray-400 font-medium">
              I have a strong foundation in data analysis, specializing in data preprocessing, visualization, and statistical analysis using Python. I work with tools like Pandas, NumPy, and Matplotlib to extract insights, identify trends, and support data-driven decision-making.
              </p>
              <button className='font-bolder bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 rounded w-24 p-1 m-2'> <a href="" target='_blank'>certificate</a></button>
            </div>
          </div>
        </div>
      </div>
      <div className=""></div>
    </section>
  )
}

export default Services