
import Banner from "../components/Banner";
import BannerReverse from "../components/BannerReverse";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Newsletter from "../components/Newsletter";
import ProudProducts from "../components/ProudProducts";
import TrendingSlider from "../components/TrendingSlider";
import Banner1 from "../img/banner/banner1.jpg";
import Banner2 from "../img/banner/banner2.jpg";
import Sub from '../components/Subscribcion'
import bannerlenceuno from '../img/bannerimg.jpeg'
import bannerlencedos from '../img/banner2lence.webp'
import { Link } from "react-router-dom";




function Home() {
  return (
    <>
      <Hero />

      <ProudProducts />
      <Banner
        title="Creative harmonious living"
        text=" RAOUF Products are all made to standard sizes so that you can mix and match them freely."
        img={bannerlenceuno}
      />
      <TrendingSlider />
      <BannerReverse
        title="Comfortable & Elegante Living"
        text=" RAOUF Products are all made to standard sizes so that you can mix and match them freely."
        img={bannerlencedos}
      />
     <div className="news">

<div className="news-text">
    <h2>Newsletter</h2>
    <form>
        <input type="email" placeholder="your@email.com"/>
        <button type="submit"> Subscribe</button>
    </form>
</div>
</div>
      <Footer />
    </>
  );
}

export default Home;
