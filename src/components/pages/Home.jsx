import Button from '../ui/Button';
import { navLinks } from '@/constants'
import PixelBlast from '../ui/PixelBast'
import LightRays from '../ui/LightRays';

const Home = () => {
  return (
    <div className="bg-black relative w-screen min-h-[100vh]">
      <div style={{ width: '100%', height: '100%', position: 'absolute', }}>
        <PixelBlast
          variant="circle"
          pixelSize={1.3}
          color="#d0c2ff"
          patternScale={4}
          patternDensity={1.5}
          pixelSizeJitter={0.5}
          speed={0.6}
          edgeFade={0.25}
          transparent
        />
      </div>
      import LightRays from './LightRays';

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
      <div className='navbar w-full'>
        <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className='sub-nav-link max-w-full overflow-x-auto'>
            <nav className='flex justify-between items-center text-white'>
              <div className="nav-links flex items-center bg-white/10 justify-between rounded-full border border-white/20 backdrop-blur-xl drop-shadow-1 gap-2 sm:gap-4 md:gap-6 lg:gap-10 py-2 px-4 sm:px-6 md:px-8 lg:px-10 h-full font-mainFont text-sm whitespace-nowrap">
                {navLinks.map((nav) => (
                  <a href={nav.link} key={nav.id} className="px-2 sm:px-0 hover:text-purple-400 transition-colors">{nav.name}</a>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home