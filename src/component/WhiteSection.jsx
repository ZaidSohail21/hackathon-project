import InfoBoxesHeroHalfScreen from "./InfoBox";
import MarketReadyProducts from "./Sell";
import VideoDemoSection from "./Video";
import UnlimitedResourcesHero from './Hero3'

export default function BigWhiteDiv() {
  return (
    <div
        className="bg-white  w-full rounded-4xl min-h-[400vh] shadow-lg"
      >

       <VideoDemoSection />
           <InfoBoxesHeroHalfScreen />
           <UnlimitedResourcesHero />

      </div>
    
  );
}