import React from "react";
import ImageHero from "assets/image/picture.jpg";
import ImageFrame from "assets/image/frame.jpg";
import IconCities from "assets/image/Icons/ic_cities.svg";
import IconTraveler from "assets/image/Icons/ic_traveler.svg";
import IconTreasure from "assets/image/Icons/ic_treasure.svg";
import Button from "elements/Button";
import Formating from "utils/FormatNumber";
import { Fade } from 'react-reveal'

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: (props.refMostPicked.current.offsetTop = -30),
      behavior: "smooth",
    });
  }
  

  return (
    <Fade bottom>
    <section className="container pt-4">
      <div className="row align-items-center">
        <div className="col-auto pr-5" style={{ width: 530 }}>
          <h1 className="font-weight-bold line-height-1 mb-3">
            Forget Busy World, <br />
            Start Next Vacation
          </h1>
          <p
            className="mb-4 font-weight-light text-gray-500 w-75"
            style={{ lineHeight: "170%" }}
          >
            We provide what you need to enjoy your holiday with family. Time to
            make another memorable moments.
          </p>
          <Button
            className="btn px-5 "
            isPrimary
            hasShadow
            onclick={showMostPicked}
          >
            Show Me
          </Button>
          <div className="row" style={{ marginTop: "80px" }}>
            <div className="col-auto" style={{ marginRight: 35 }}>
              <img
                width={36}
                height={36}
                src={IconTraveler}
                alt={`${props.data.travelers} Travelers`}
              />
              <h6 className="mt-3">
                {Formating(props.data.travelers)}{" "}
                <span className="text-gray-500 font-weight-light">
                  travelers
                </span>
              </h6>
            </div>
            <div className="col-auto" style={{ marginRight: 35 }}>
              <img
                width={36}
                height={36}
                src={IconTreasure}
                alt={`${props.data.treasures} Treasure`}
              />
              <h6 className="mt-3">
                {Formating(props.data.treasures)}{" "}
                <span className="text-gray-500 font-weight-light">
                  treasures
                </span>
              </h6>
            </div>
            <div className="col-auto">
              <img
                width={36}
                height={36}
                src={IconCities}
                alt={`${props.data.cities} Cities`}
              />
              <h6 className="mt-3">
                {Formating(props.data.cities)}{" "}
                <span className="text-gray-500 font-weight-light">cities</span>
              </h6>
            </div>
          </div>
        </div>
        <div className="col-6 pl-5">
          <div style={{ width: 520, height: 410 }}>
            <img
              src={ImageHero}
              alt=""
              className="img-fluid position-absolute"
              style={{ margin: "-30px 0 0 -30px", zIndex: 1 }}
            />
            <img
              src={ImageFrame}
              alt=""
              className="img-fluid position-absolute"
              style={{ margin: "0 -15px -15px 0" }}
            />
          </div>
          img-hero
        </div>
      </div>
    </section>
    </Fade>
  );
}
