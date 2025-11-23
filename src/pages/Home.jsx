import { navLinks } from '@/constants'
import PixelBlast from '@/components/ui/PixelBast'
import ShinyText from '@/components/ui/shinytext';
import LightRays from '@/components/ui/LightRays';
import GlowText from "@/components/ui/Glowtext";
import GlossyBorder from '@/components/ui/Lineglow';
import Thirdpage from './Thirdpage';
import MetallicLogo from '../components/MetallicLogo';
import { useRef, useEffect, useState } from 'react';
import Button from '@/components/ui/Button';
import GradualBlurMemo from '@/components/GradualblurMemo';
import Secondpage from './Secondpage';


const Home = () => {
  const textRef = useRef(null);
  const [textWidth, setTextWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (textRef.current) {
        const width = textRef.current.getBoundingClientRect().width;
        setTextWidth(width);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);

    return () => window.removeEventListener('resize', updateWidth);
  }, []);
  return (
    <>
      <section style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
        <div className="bg-black flex flex-col justify-start mx-auto relative min-h-[100vh] overflow-hidden">
          {/*backgournd */}
          <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, opacity: 0.2, zIndex: 0 }}>
            <PixelBlast
              variant="circle"
              pixelSize={1.3}
              color="#d0c2ff"
              liquid
              patternScale={4}
              patternDensity={1.5}
              pixelSizeJitter={0.5}
              speed={0.6}
              edgeFade={0.25}
              transparent
            />
          </div>

          <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, zIndex: 0 }}>
            <LightRays
              raysOrigin="top-center"
              raysColor="#d0c2ff"
              raysSpeed={1.5}
              lightSpread={3}
              rayLength={1.2}
              followMouse={true}
              mouseInfluence={0.1}
              noiseAmount={0.5}
              distortion={0.07}
              className="custom-rays"
            />
          </div>
          <div className='navbar flex justify-center w-full z-20'>
            <div className="flex items-center justify-center p-4 sm:px-6 lg:px-8">
              <div className='sub-nav-link max-w-full overflow-x-auto'>
                <nav className='flex justify-between items-center text-white'>
                  <GlossyBorder className='rounded-full'
                  >
                    <div className="nav-links flex items-center justify-between rounded-full backdrop-blur-xl drop-shadow-1 gap-2 py-2 px-4 sm:px-6 h-full font-mainFont text-sm whitespace-nowrap">
                      {navLinks.map((nav) => (
                        <a
                          href={nav.link}
                          key={nav.id}
                          className="px-2 sm:px-3 hover:text-orange-600 transition-colors text-sm"
                        >
                          {nav.name}
                        </a>
                      ))}
                    </div>
                  </GlossyBorder>
                </nav>
              </div>
            </div>
          </div>
          <div className='flex justify-center z-10 items-center flex-1'>
            <div className='maintitlediv flex relative justify-center w-full items-center flex-col h-full'>
              <div className='flex introducing'>
                <ShinyText
                  text="Introducing 🎉"
                  disabled={false}
                  speed={2}
                  className='font-mainFont'
                />
              </div>
              <div className='landing-name-seebysound relative flex flex-col items-center justify-center w-full p-4'>
                <div
                  className='ankala absolute hidden top-1/2 bg-[#92487A] blur-3xl'
                  style={{
                    width: `${textWidth}px`,
                    height: '40px',
                    left: '50%',
                    transform: 'translateX(-50%)'
                  }}
                ></div>
                <div ref={textRef}>
                  <GlowText className='headingtext flex font-normal font-mainFont text-5xl sm:text-8xl text-white'>
                    Seebysound
                  </GlowText>
                </div>
                <div className='text-white/80 hidden sm:block tracking-tighter max-w-xs sm:max-w-6xl py-1 px-4 font-mainFont shadow-xl items-center  text-center'>
                  <p>AI smart glasses guide the visually impaired by voice—no cane needed.</p>
                </div>

              </div>
              {/*3d render*/}
              <div className='absolute top-20 w-full h-full -z-10 '>
                <MetallicLogo />
              </div>
              <div className='the-two-buttons flex mt-20 lg:mt-56 justify-center items-center gap-4 p-4'>
                <div className='div-1-btn text-white font-main'>
                  <Button className="backdrop-blur-md border border-[#f97316]/50 bg-gray-500/10  py-1 lg:py-2 lg:px-8">
                    Join Waitlist
                  </Button>
                </div>
                <div className='div-2-btn text-white font-main'>
                  <Button className="bg-gradient-to-tl from-[#c2410c] via-[#f97316] to-[#fdba74]  py-1 lg:py-2 lg:px-8" onClick={() => { console.log("this button is clicked") }}>
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* This is the second page section */}
        <Secondpage />
        {/* This is the Third page section */}
        <Thirdpage />
        <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, height: '6rem', zIndex: 9999, pointerEvents: 'none' }}>
          <GradualBlurMemo
            target="parent"
            position="bottom"
            height="6rem"
            strength={2}
            divCount={5}
            curve="bezier"
            exponential={true}
            opacity={1}
          />
        </div>
      </section>
    </>
  )
}

export default Home
