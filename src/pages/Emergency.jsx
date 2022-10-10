import React, { useEffect, useState } from "react";
import { ImInfo } from "react-icons/im";
import "../pages/Emergency.css";
import { data } from "../Data/data";
import image from '../images/contact.png'
export default function Emergency() {
  const [degmooyin, setDegmooyin] = useState([]);
  const [currentDegmo, setCurrentDegmo] = useState({});

  useEffect(() => {
    setDegmooyin([...data]);
    setCurrentDegmo(data[0]);
  }, []);

  function handleDegmoChange(currentValue) {
    document.querySelector(".xog").classList.remove("hidden");
    const current = degmooyin.filter((el) => el.magaca === currentValue)[0];
    setCurrentDegmo(current);
  }

  return (
    <div className="emergency" id="Emergency">
      <div className="image">
        <img src={image}/>
      </div>
    <div className="all">
    <div className="box">
        <div className="icons">
          <ImInfo />
        </div>
        <div className="emergency-header">
          <h4>Hadaad lakulato arin halis</h4>
          <p>Laxariir laamaha aminga ee kuugu dhow</p>
        </div>
      </div>

      <div className="emergency-options">
        <div className="option">
          <form action="#">
            <label htmlFor="option-degmo">Degmada aad kusugantahay: </label>
            <select
              onChange={(e) => handleDegmoChange(e.target.value)}
              name="option-degmo"
              id="option-degmo"
            >
              {degmooyin.map((el) => {
                return (
                  <option
                    className="user-option"
                    key={el.magaca}
                    value={el.magaca}
                  >
                    {el.magaca}
                  </option>
                );
              })}
            </select>
          </form>
        </div>

        <div className="xog hidden">
          <p className="light">
            Taliyaha magaciisa:
            <span className="taliyaha-magaca bold">
              {currentDegmo.taliyaha}
            </span>
          </p>
          <p className="light">
            Taliyaha nambarkiisa:
            <span className="taliyaha-nambarkiisa bold">
              {currentDegmo.nambarka}
            </span>
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}