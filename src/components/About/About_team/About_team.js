import about2 from "./../../../img/about3.png"
import about3 from "./../../../img/about4.png"
import about4 from "./../../../img/about5.png"
import about5 from "./../../../img/about6.png"
import about6 from "./../../../img/about7.png"
import about7 from "./../../../img/about8.png"

const AboutTeam = () => {
    return (
        <>
            <div id="teams">
                <div className="container">
                    <h1 className="teams--title">Our Team</h1>
                    <div className="team">
                        <div className="team--block">
                           <div className="images">
                               <img src={about2} alt=""/>
                           </div>
                            <h1>Miss.Anushin oont </h1>
                            <p>CEO & co-Founder</p>
                        </div>
                        <div className="team--block">
                           <div className="images">
                               <img src={about3} alt=""/>
                           </div>
                            <h1>Miss.Anushin oont </h1>
                            <p>CEO & co-Founder</p>
                        </div>
                        <div className="team--block">
                           <div className="images">
                               <img src={about4} alt=""/>
                           </div>
                            <h1>Miss.Anushin oont </h1>
                            <p>CEO & co-Founder</p>
                        </div>

                        <div className="team--block">
                           <div className="images">
                               <img src={about5} alt=""/>
                           </div>
                            <h1>Miss.Anushin oont </h1>
                            <p>CEO & co-Founder</p>
                        </div>

                        <div className="team--block">
                          <div className="images">
                              <img src={about6} alt=""/>
                          </div>
                            <h1>Miss.Anushin oont </h1>
                            <p>CEO & co-Founder</p>
                        </div>

                        <div className="team--block">
                            <div className="images">
                                <img src={about7} alt=""/>
                            </div>
                            <h1>Miss.Anushin oont </h1>
                            <p>CEO & co-Founder</p>
                        </div>
                    </div>


                </div>

            </div>
        </>
    );
};

export default AboutTeam;