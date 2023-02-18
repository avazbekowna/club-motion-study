import React from 'react';
import pho1 from "../../../../../img/photo1.png"
import pho2 from "../../../../../img/photo2.png"
import pho3 from "../../../../../img/photo3.png"
import pho4 from "../../../../../img/photo4.png"
import pho5 from "../../../../../img/phote5.png"
import pho6 from "../../../../../img/photo6.png"
const Tabs3 = () => {
    return (
        <>

           <div id="images">
              <div className="photo">
                  <img src={pho1} alt=""/>
                  <img src={pho2} alt=""/>
                  <img src={pho3} alt=""/>
                  <img src={pho4} alt=""/>
                  <img src={pho5} alt=""/>
                  <img src={pho6} alt=""/>
              </div>
           </div>
        </>
    );
};

export default Tabs3;