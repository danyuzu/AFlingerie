import './TrendingSlider.css'
import TrendingItem from "./TrendingItem";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

function TrendingSlider() {
    const slideLeft = () => {
        let slider = document.getElementById("slider")
        slider.scrollLeft = slider.scrollLeft - 235;

    }

    const slideRight = () => {
        let slider = document.getElementById("slider");
        slider.scrollLeft =slider.scrollLeft + 235;
    }

    return(
      <div className="trending">
        <div className="container">
            <div className="title-btns">
                <h3>En tendencia ahora</h3>
                <div className="btns">
                    <button className="scroll left" onClick={slideLeft}>
                        <IconArrowLeft/>
                    </button>
                    <button className="scroll right" onClick={slideRight}>
                        <IconArrowRight/>
                    </button>
                    
                </div>
            </div>
            <div className="row-container" id='slider'>
                   <TrendingItem/>
            </div>
        </div>

      </div>

    )
}

export default TrendingSlider;