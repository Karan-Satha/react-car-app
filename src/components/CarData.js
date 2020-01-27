import React from "react";
const CarData = {
  cars: [
    {
      id: 1,
      make: "Ford",
      model: "Fiesta",
      color: "White",
      transmission: "Automatic",
      price: 14000,
      image: {
        imgUrl: "./image/ford-fiesta.webp",
        alt: "Ford Fiesta"
      }
    },
    {
      id: 2,
      make: "Ford",
      model: "Focus",
      color: "Red",
      transmission: "Manual",
      price: 21000,
      image: {
        imgUrl: "./image/ford-focus.png",
        alt: "Ford Focus"
      }
    },
    {
      id: 3,
      make: "Ford",
      model: "New Edge",
      color: "Silver",
      transmission: "Manual",
      price: 34000,
      image: {
        imgUrl: "./image/ford-new-edge.webp",
        alt: "Ford New Edge"
      }
    }
  ]
};
export default CarData;
