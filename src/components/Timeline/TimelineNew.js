import React from 'react';
import './TimelineNew.css';

export const TimelineNew = () => {
    return (
        <div classNameName="timelineWrapper">
            <div className="main">
  
  <div className="cardTop">
      <svg width="497" height="219" viewBox="0 0 497 219" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M-38.5 196C-38.5 196 34 91 133.5 91C233 91 427 159 532.5 30C638 -99 518 236 518 236L-49 246.5L-38.5 196Z" fill="#FF768E"/>
      </svg>
  </div>
  
  <div className="timeline">
      <h3>Updates</h3>
      <label>23 in the last 7 hours</label>
          <div className="box">
              <div className="container">
                      <div className="lines">
                          <div className="dot"></div>
                          <div className="line"></div>
                          <div className="dot"></div>
                          <div className="line"></div>
                          <div className="dot"></div>
                          <div className="line"></div>
                      </div>
                      <div className="cards">
                          <div className="card">
                              <h4>16:30</h4>
                              <p>Believing Is The Absence<br/> Of Doubt</p>
                          </div>
                          <div className="card mid">
                              <h4>15:22</h4>
                              <p>Start With A Baseline</p>
                          </div>
                          <div className="card">
                              <h4>14:15</h4>
                              <p>Break Through Self Doubt<br/> And Fear</p>
                          </div>
                      </div>
              </div>

                      <div className="bottom">
                          <div className="btn">Show all updates</div>
                      </div>

          </div>
      </div>
  </div>
        </div>
        
    )
};