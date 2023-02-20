import React from "react";
import "./RestaurantsSlide.css";
import hamburger from "../../../../assets/restaurant-slide/hamburger.png";
import risotto from "../../../../assets/restaurant-slide/risotto.png";
import salad from "../../../../assets/restaurant-slide/salad.png";
import other from "../../../../assets/restaurant-slide/other.png";
import burger from "../../../../assets/restaurant-slide/burger.png";
import pastifigio from "../../../../assets/restaurant-slide/pastifigio.png";
import believe from "../../../../assets/restaurant-slide/believe.png";
import vietnamese from "../../../../assets/restaurant-slide/vietnamese.png";
import Carousel from "./Carousel";

class Restaurants extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: [
        { id: 1, img: hamburger, img2: burger },
        { id: 2, img: risotto, img2: pastifigio },
        { id: 3, img: salad, img2: believe },
        { id: 4, img: other, img2: vietnamese },
      ],
    };
  }

  render() {
    return (
      <div style={{ height: "500px" }}>
        <Carousel imgStore={this.state.image} />
      </div>
    );
  }
}

export default Restaurants;
