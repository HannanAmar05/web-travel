import React, { Component } from "react";
import Header from "parts/Header";
import landingPage1 from "../json/landingPage.json";
import Hero from "parts/Hero";
import MostPicked from "parts/MostPicked";
import Categories from "parts/Categories";
import Testimonial from "parts/Testimonial";
import Footer from "parts/Footer";

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }
  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <Hero
          refMostPicked={landingPage1.mostPicked}
          data={landingPage1.hero}
        />
        <MostPicked data={landingPage1.mostPicked} refMostPicked={landingPage1.mostPicked} />
        <Categories data={landingPage1.categories} />
        <Testimonial  data={landingPage1.testimonial}/>
        <Footer/>
      </>
    );
  }
}
