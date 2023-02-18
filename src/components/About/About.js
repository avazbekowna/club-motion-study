import React from 'react';
import AboutHero from "./About_hero/About_hero";
import AboutTeam from "./About_team/About_team";

const About = () => {
    return (
        <>
          <div className="wrapper">
              <AboutHero/>
              <AboutTeam/>
          </div>
        </>
    );
};

export default About;