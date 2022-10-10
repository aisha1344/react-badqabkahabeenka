import React from "react";
import ReactPlayer from "react-player";
import tips from '../images/tips.mp4'
import '../main.css'

function Furaysha() {
  return (
    <div id="Taloyin" className="furaysha">
      <h3>
        Furayaasha badbaadada <br />
        <b>shakhsi ahaaneed</b>
      </h3>

      <div className="furo">
        <div className="list">
          <ul>
          <li>Taxadar</li>
          <li>ilaali xuduudahaaga</li>
          <li>Kalsooni iyo xirfad</li>
          <li>Lahaanshaha qorshe badbaado</li>
          </ul>
        </div>
        <div className="video">
          <h3>Watch the video of Our self-defense training to learn more</h3>

          <ReactPlayer
            className="react-player fixed-bottom"
            url='https://www.youtube.com/watch?v=H8b7dbLFaI4'
            width="350px"
            height="250px"
            controls={true}
          />
        </div>
      </div>
    </div>
  );
}

export default Furaysha;