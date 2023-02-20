import React from "react";
import "./Picture.css";
import instagram1 from "../../../../assets/instagram/instagram1.png";
import instagram2 from "../../../../assets/instagram/instagram2.png";
import instagram3 from "../../../../assets/instagram/instagram3.png";
import instagram4 from "../../../../assets/instagram/instagram4.png";

class Picture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      instagram: [
        { id: 1, img: instagram1 },
        { id: 2, img: instagram2 },
        { id: 3, img: instagram3 },
        { id: 4, img: instagram4 },
      ],
    };
  }

  render() {
    return (
      <div>
        <ul className="instagram_picture">
          {this.state.instagram.map((item) => {
            return (
              <li key={item.id}>
                <img src={item.img} alt="" />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Picture;
