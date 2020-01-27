import React, { Component } from "react";

class CarDetails extends Component {
  render() {
    const { make, model, color, transmission, price } = this.props.cars;
    const { imgUrl, alt } = this.props.cars.image;
    return (
      <div>
        <img src={imgUrl} alt={alt} />
        <h2>
          {make} {model}
        </h2>
        <p>{color}</p>
        <p>{transmission}</p>
        <p>Price from: £{price}</p>
        <button>Explore</button>
      </div>
    );
  }
}
export default CarDetails;
