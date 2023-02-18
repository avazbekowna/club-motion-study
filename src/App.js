import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.scss';
import {Routes, Route} from "react-router-dom"
import Home from "./components/Home/Home";
import Study from "./components/Study/Study";
import About from "./components/About/About";
import Search from "./components/Search/Search";
import Contacts from "./components/Contacts/Contacts";
import {useEffect, useState} from "react";
import Loading from "./components/Loading/Loading";
import Ielts from "./components/Home/Home_exams/Ielts/Ielts";
import OtherExams from "./components/Home/Home_exams/Other-exams/Other-exams";
import DiscoverMore from "./components/Home/Home_exams/Discover-more/Discover-more";
import Aptis from "./components/Home/Home_exams/Aptis/Aptis";
import United from "./components/Study/study-country/united/United";
import Country from "./components/Study/study-country/Country";
import HomeForm from "./components/Home/Home_form/Home_form";


function App() {

    const [load, setLoad] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoad(false);
        }, 5800);
    }, []);

    return (
        <div className="App">
            <Loading load={load}/>
            <div style={{
                display: load ? 'none' : 'block'
            }}>
                <Routes>
                    <Route path={"/Home"} element={<Home/>}/>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/Study"} element={<Study/>}/>
                    <Route path={"/About"} element={<About/>}/>
                    <Route path={"/Search"} element={<Search/>}/>
                    <Route path={"/Contacts"} element={<Contacts/>}/>
                    <Route path={"/Aptis"} element={<Aptis/>}/>
                    <Route path={"/Discover-more"} element={<DiscoverMore/>}/>
                    <Route path={"/Ielts"} element={<Ielts/>}/>
                    <Route path={"/Other-exams"} element={<OtherExams/>}/>
                    <Route path={"/United"} element={<United/>}/>
                    <Route path={"/Country"} element={<Country/>}/>
                    <Route path={"/Home_form"} element={<HomeForm/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
