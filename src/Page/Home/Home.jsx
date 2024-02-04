import HomeAbout from "../../Components/Template/HomeAbout/HomeAbout"
import HomeHeader from "../../Components/Template/home/HomeHeader"

function Home() {
  return (
    <section className="bg_back">
        <HomeHeader/>
        <HomeAbout/>
    </section>
  )
}

export default Home