import React from "react";
import "./Number.css";
import circle1 from "../../../../assets/yellowborder.png";
import circle2 from "../../../../assets/yellowcircle.png";

class LemonCircle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      circle: [
        { id: 1, img: circle1, img2: circle2, name: "kitchen", number: 1 },
        { id: 2, img: circle1, img2: circle2, name: "specialties", number: 11 },
        { id: 3, img: circle1, img2: circle2, name: "restaurants", number: 11 },
        {
          id: 4,
          img: circle1,
          img2: circle2,
          name: "transport costs",
          number: 1,
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <ul className="lemon_circle">
          {this.state.circle.map((item) => {
            return (
              <li key={item.id}>
                <img src={item.img} alt="" className="circle_border" />
                <img src={item.img2} alt="" className="circle_color" />
                <div>{/* <h1 className="lemon_h1">{item.number}</h1> */}</div>
                <div>
                  <h2 className="lemon_h2">{item.name}</h2>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default LemonCircle;
