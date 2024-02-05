import HomeAbout from "../../Components/Template/home/HomeAbout/HomeAbout"
import HomeHeader from "../../Components/Template/home/HomeHeader/HomeHeader"

function Home() {
  return (
    <section className="bg_back">
        <HomeHeader/>
        <HomeAbout/>
    </section>
  )
}

export default Home