
import "./Header.css";
import Main1 from "../img/header/home-img-1.jpg";
import Main2 from "../img/header/home-img-2.jpg";
import Main3 from "../img/header/home-img-3.jpg";
import Main4 from "../img/header/home-img-4.jpg";
import { Link } from "react-router-dom";
import vknyuno from "../img/products/vikini1.jpeg"
import vknydos from "../img/products/vikini2.jpeg"
import vknytres from "../img/products/vikini3.jpeg"
import vknycuatro from "../img/products/vikini4.jpeg"

function Hero(){
    return(
        <>
        <div className="home-container">
            <div className="container">
                <div className="grid-container">
                    <div className="featured grid-one">
                        <Link to='categories/furnitures'>
                            <div id='img1' className="lil-overlay"></div>
                            <img src={vknyuno} alt="img1"/>
                            <p className="main-description">Conjuntos</p>
                        </Link>
                    </div>
                    <div className="featured grid-two">
                        <Link to='categories/skin-care'>
                            <div id='img2' className="lil-overlay"></div>
                            <img src={vknydos} alt="img2"/>
                            <p className="main-description">Lenceria</p>
                        </Link>
                    </div>
                    <div className="featured grid-four">
                        <Link to='categories/kitche'>
                            <div id='img' className="lil-overlay"></div>
                            <img src={vknytres} alt="img3"/>
                            <p className="main-description">Sensual</p>
                        </Link>
                    </div>
                    <div className="featured grid-four-low">
                        <Link to='categories/electronics'>
                            <div id='img1' className="lil-overlay"></div>
                            <img src={vknycuatro} alt="img4"/>
                            <p className="main-description">Multiocacion</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Hero;