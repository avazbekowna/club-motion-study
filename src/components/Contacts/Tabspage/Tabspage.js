import React, {useState} from 'react';
import Tabs1 from "./Tabs1/Tabs1";
import Tabs2 from "./Tabs2/Tabs2";
import Tabs3 from "./Tabs3/Tabs3";

function Tabspage () {
    const [index,setIndex] = useState(0)

    return (
        <div className="tabs">
            <div className="tabsList">
                <div className={`tabHead ${index ===0? 'active': null}`}  onClick={() =>{setIndex(0)}}>
                    Description

                </div>


                <div className={`tabHead ${index ===1? 'active': null}`} onClick={() =>{setIndex(1)}}>
                    Cost

                </div>

                <div className={`tabHead ${index ===2? 'active': null}`} onClick={() =>{setIndex(2)}}>
                    Photo

                </div>
            </div>

            <div className="tabContent" hidden={index !== 0}>
                <div className="line-tab"></div>
                <Tabs1/>

            </div>
            <div className="tabContent" hidden={index !== 1}>
                <div className="line-tab2"></div>
                <Tabs2/>

            </div>
            <div className="tabContent" hidden={index !== 2}>
                <div className="line-tab3"></div>
                <Tabs3/>
            </div>

        </div>
    );
}

export default Tabspage;