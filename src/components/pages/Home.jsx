import { navLinks } from '@/constants'
import PixelBlast from '../ui/PixelBast'
import ShinyText from '../ui/shinytext';
import ScrambledText from '../ui/ScrambledText';
import LightRays from '../ui/LightRays';


const Home = () => {
  return (
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

      <div style={{ width: '100%', opacity: 0.7, height: '100%', position: 'absolute', top: 0, zIndex: 0 }}>
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
              <div className="nav-links shiny-border flex items-center justify-between rounded-full backdrop-blur-xl drop-shadow-1 gap-2 py-2 px-4 sm:px-6 h-full font-mainFont text-sm whitespace-nowrap">
                {navLinks.map((nav) => (
                  <a
                    href={nav.link}
                    key={nav.id}
                    className="px-2 sm:px-3 hover:text-purple-400 transition-colors text-sm"
                  >
                    {nav.name}
                  </a>
                ))}
              </div>

            </nav>
          </div>
        </div>
      </div>
      <div className='flex justify-center z-10 items-center mx-auto mt-16 max-w-4xl'>
        <div className='maintitlediv flex justify-center items-center flex-col'>
          <div className='introducing'>
            <ShinyText
              text="Introducing 🎉"
              disabled={false}
              speed={2}
              className='font-mainFont'
            />
          </div>
          <div className='landing-name flex flex-nowrap p-4'>
            <div className='headingtext font-mainFont text-5xl sm:text-8xl lg:text-9xl text-white'>
              <ScrambledText
              className='dottedom'
              radius={60}
              duration={1.2}
              speed={0.5}
              scrambleChars={":::..:"}
              >
                Seebysound
              </ScrambledText>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home