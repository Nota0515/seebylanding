import React from 'react'
import ScrollReveal from "@/components/ScrollReveal"

const Secondpage = () => {
    return (
        //second page line ! 
        < div className = "page2 bg-black flex items-center justify-center text-white min-h-screen py-24" >
            <div className="max-w-3xl px-6">
                <ScrollReveal
                    baseOpacity={0}
                    enableBlur={true}
                    baseRotation={5}
                    blurStrength={10}
                >
                    {`Millions of Blind disabled people face daily challenges navigating the world safely. Traditional walking sticks only detect obstacles — they don't understand the environment. Seebysound changes that — by giving vision a voice via AI.`}
                </ScrollReveal>
            </div>
          </div >
  )
}

export default Secondpage
