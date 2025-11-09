import { navLinks } from '@/constants'
import PixelBlast from '@/components/ui/PixelBast'
import ShinyText from '@/components/ui/shinytext';
import LightRays from '@/components/ui/LightRays';
import GlowText from "@/components/ui/Glowtext";
import GlossyBorder from '@/components/ui/Lineglow';
import Footer from './Footer';
import MetallicLogo from '../components/MetallicLogo';
import { useRef, useEffect, useState } from 'react';


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
        <div className='flex justify-center z-10 items-center mt-16'>
          <div className='maintitlediv flex relative justify-center w-full items-center flex-col'>
            <div className='flex introducing'>
              <ShinyText
                text="Introducing 🎉"
                disabled={false}
                speed={2}
                className='font-mainFont'
              />
            </div>
            <div className='landing-name relative z-20 flex justify-center w-full flex-nowrap p-4'>
              <div
                className='ankala absolute bottom-3 bg-purple-950/20 blur-md'
                style={{
                  width: `${textWidth}px`,
                  height: '40px',
                  left: '50%',
                  transform: 'translateX(-50%)'
                }}
              ></div>
              <div ref={textRef}>
                <GlowText className='headingtext flex font-normal font-mainFont text-5xl sm:text-8xl lg:text-9xl text-white'>
                  Seebysound
                </GlowText>
              </div>
            </div>
            <div className='absolute top-0 mt-12 w-full h-full'>
              <MetallicLogo />
            </div>
          </div>
        </div>
      </div>
      <div className='w-full mt-auto'>
        <Footer />
      </div>
    </>
  )
}

export default Home
