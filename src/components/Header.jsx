import React from 'react'
import { Link } from 'react-scroll'
import { HiBars3, HiBolt, HiOutlineMoon, HiOutlineSun, HiXMark } from 'react-icons/hi2'
import { RiGithubFill, RiLinkedinBoxFill } from 'react-icons/ri'

function Header({ lightdark, lightdarkmode, menuopen, menuOpen }) {
    return (
        <header className="w-full sticky top-0  bg-gray-50 dark:bg-gray-900 transition-all duration-100 z-50">
            <div className="max-w-6xl mx-auto px-4 lg:px-0 py-6 flex items-center justify-between">
                <div className="">
                    <a href="" className="dark:text-white flex items-center space-x-2">
                        <span className="text-2xl font-bold">Md shamse</span>
                    </a>
                </div>
                <div className="flex items-center space-x-4">
                    <nav className="hidden md:flex items-center space-x-4 border-r-2 px-4 dark:border-gray-600">
                        <Link to="About" spy={true} smooth={true} offset={0} duration={100} className={`py-1 text-sm font-medium hover:text-gray-400 transition-all duration-200 cursor-pointer hover:underline underline-offset-8`} activeClass='font-bolder text-gray-400 underline'>About</Link>
                        <Link to="Services" spy={true} smooth={true} offset={0} duration={100} className={`py-1 text-sm font-medium hover:text-gray-400 transition-all duration-200 cursor-pointer hover:underline underline-offset-8`} activeClass='font-bolder text-gray-400 underline'>Services</Link>
                        <Link to="Skills" spy={true} smooth={true} offset={0} duration={100} className={`py-1 text-sm font-medium hover:text-gray-400 transition-all duration-200 cursor-pointer hover:underline underline-offset-8`} activeClass='font-bolder text-gray-400 underline'>Skills</Link>
                        <Link to="Projects" spy={true} smooth={true} offset={0} duration={100} className={`py-1 text-sm font-medium hover:text-gray-400 transition-all duration-200 cursor-pointer hover:underline underline-offset-8`} activeClass='font-bolder text-gray-400 underline'>Projects</Link>
                        <Link to="Contact" spy={true} smooth={true} offset={0} duration={100} className={`py-1 text-sm font-medium hover:text-gray-400 transition-all duration-200 cursor-pointer hover:underline underline-offset-8`} activeClass='font-bolder text-gray-400 underline'>Contact</Link>
                    </nav>
                    <div className="flex items-center space-x-4">
                        
                        <a href="https://github.com/mdshamse1" className="text-sm font-semibold hover:text-gray-400 transition-all duration-200" target='_blank' rel=""><RiGithubFill className='w-6 h-6' /></a>
                        <a href="https://www.linkedin.com/in/mdshamse/" className="text-sm font-semibold hover:text-gray-400 transition-all duration-200" target='_blank' rel=""><RiLinkedinBoxFill className='w-6 h-6' /></a>
                        <button className="text-sm font-semibold" onClick={lightdarkmode}>
                            <HiOutlineMoon className={`w-6 h-6 hover:text-gray-400 transition-all duration-200 ${lightdark ? 'hidden' : ''}`} />
                            <HiOutlineSun className={`w-6 h-6 hover:text-gray-400 transition-all duration-200 ${lightdark ? '' : 'hidden'} `} />
                        </button>
                        <button className="md:hidden text-sm font-semibold" onClick={menuOpen}>
                            <HiBars3 className={`w-6 h-6 ${menuopen ? 'hidden' : ''}`} />
                            <HiXMark className={`w-6 h-6 ${menuopen ? '' : 'hidden'}`} />
                        </button>
                    </div>
                </div>
            </div>
            <div className={`fixed top-16 w-full px-10 py-10 bg-white dark:bg-zinc-950 space-y-4 ${menuopen ? '' : 'hidden'}`}>
                <nav className="space-y-4">
                    <Link to="About" spy={true} smooth={true} offset={0} duration={100} className='block py-1 font-medium underline-offset-8' activeClass='font-bolder text-gray-400 underline'>About</Link>
                    <Link to="Services" spy={true} smooth={true} offset={0} duration={100} className='block py-1 font-medium underline-offset-8' activeClass='font-bolder text-gray-400 underline'>Services</Link>
                    <Link to="Skills" spy={true} smooth={true} offset={0} duration={100} className='block py-1 font-medium underline-offset-8' activeClass='font-bolder text-gray-400 underline'>Skills</Link>
                    <Link to="Projects" spy={true} smooth={true} offset={0} duration={100} className='block py-1 font-medium underline-offset-8' activeClass='font-bolder text-gray-400 underline'>Projects</Link>
                    <Link to="Contact" spy={true} smooth={true} offset={0} duration={100} className='block py-1 font-medium underline-offset-8' activeClass='font-bolder text-gray-400 underline'>Contact</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header