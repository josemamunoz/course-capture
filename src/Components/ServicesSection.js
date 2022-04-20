import React from 'react';
//Import icons
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png'; 


const ServicesSection = () => {
    return(
        <div className="services">
            <div className="description">
                <h2>High <span>quality</span> services</h2>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <img alt="icon-clock" src={clock}/>
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img alt="icon-teamwork" src={teamwork}/>
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img alt="icon-diaphragm" src={diaphragm}/>
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img alt="icon-money" src={money}/>
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                    </div>
                </div>
                <img alt="camera" src={home2}></img>
            </div>
        </div>
    )
}

export default ServicesSection;