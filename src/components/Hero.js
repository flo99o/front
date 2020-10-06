import React from "react";
// components
import Header from "./Header";


const Hero = ({title, subtitle}) => {
  return (
    <section className="hero">
        <img id="logo-menu" src="https://img.icons8.com/metro/26/000000/menu.png"/>
        <Header/>
      <div className="heading-primary">
        <h1 className="heading-primary--main">{title}</h1>
  <p className="heading-primary--sub">{subtitle}</p>
      </div>
    </section>
      
  );
};

Hero.defaultProps = {
  title: 'Find your next job',
  subtitle : 'parmis nos X jobs.'
}

export default Hero;
