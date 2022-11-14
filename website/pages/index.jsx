import Navbar from "../components/navbar/navbar"
import Banner from "../components/sections/homepage/banner/banner"
import HowItWorks from "../components/sections/homepage/newgrads-0experience/how-it-works"
import ChooseYourPath from "../components/sections/homepage/chosepath-helpingppl/choose-your-path"
import WorkForYou from "../components/sections/homepage/fleetworkforyou/workforyou"

export default function Home() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <HowItWorks />
      <ChooseYourPath />
      <WorkForYou />
    </>
   
  )
}
