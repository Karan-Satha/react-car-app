import React, { Component } from "react";
import CarDetails from "./CarDetails";

class Cars extends Component {
  render() {
    return this.props.cars.map(car => <CarDetails key={car.id} cars={car} />);
  }
}
export default Cars;
