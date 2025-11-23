import React from 'react'
import ScrollReveal from "@/components/ScrollReveal"

const Secondpage = () => {
    return (
        //second page line ! 
        < div className="page2 bg-black flex relative px-12 items-center justify-center lg:text-black min-h-screen py-4" >
            <div className='glowbg absolute inset-32 left-1/2 -translate-x-1/2 max-w-3xl blur-[270px] bg-[#1c1c1c]'></div>
            <div className="max-w-3xl mx-auto z-10 px-4 py-6 rounded-3xl bg-gradient-to-br from-[#f97316] via-[#fb923c] to-[#fdba74]">
                <p className='text-3xl sm:text-5xl px-4 md:px-0 md:text-6xl group '>
                    Millions <img className='inline-block align-middle grayscale group-hover:grayscale-0 h-10 w-14 sm:h-12 sm:w-20 md:h-16 md:w-28 object-cover rounded-xl mr-2 ml-2 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]' src='/src/assets/eyes/closeeye.png'/>of Blind disabled people face daily challenges navigating the world safely. Traditional walking sticks only detect obstacles — they don't understand the environment. Seebysound changes that — by giving vision a voice via AI.
                </p>
            </div>
        </div >
    )
}

export default Secondpage
