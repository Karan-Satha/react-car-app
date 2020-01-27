import React, { Component } from "react";
import CarData from "./components/CarData";
import Cars from "./components/Cars";
import Header from "./components/Header";
import "./styles/main.css";

class CarApp extends Component {
  state = { CarData };
  render() {
    return (
      <div>
        <Header />
        <Cars cars={this.state.CarData.cars} />
      </div>
    );
  }
}
export default CarApp;
