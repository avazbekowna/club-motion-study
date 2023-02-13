import React from 'react';
import HomeHero from "./Home_hero/Home_hero";
import HomeAbouts from "./Home_abouts/Home_abouts";
import HomeExams from "./Home_exams/Home_exams";
import HomeComments from "./Home_comments/Home_comments";
import HomeForm from "./Home_form/Home_form";

const Home = () => {
    return (
        <div>
            <HomeHero/>
            <HomeAbouts/>
            <HomeExams/>
            <HomeComments/>
            <HomeForm/>
        </div>
    );
};

export default Home;