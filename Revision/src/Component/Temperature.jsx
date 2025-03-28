import React from "react";

function Temperature({ temp }) {
  //   if (temp < 15) {
  //     return <h1>Weather is Cold!</h1>;
  //   } else if (15 > temp < 25) {
  //     return <h1>Weather is Nice! </h1>;
  //   } else {
  //     return <h1>Weather is Hot!</h1>;
  //   }

  console.log("temp value", temp);

  return temp < 15 ? (
    <h1>Weather is Cold! 🥶</h1>
  ) : 15 <= temp && temp <= 25 ? (
    <h1>Weather is Nice! 😄</h1>
  ) : (
    <h1>Weather is Hot! 🥵</h1>
  );
}

export default Temperature;
