import React, { useState } from "react";
import "./TaskChart.css";
import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJs.register(Tooltip, Title, ArcElement, Legend);
const ChartMain = () => {
  const [percent, setPercent] = useState({
    correct: "",
    false: "",
  });
  const [err, setErr] = useState("");
  const [data, setData] = useState({
    datasets: [
      {
        data: [75, 25],
        backgroundColor: ["gray", "pink"],
      },
    ],
    labels: ["Box1", "Box2"],
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (value <= 100 && value >= 0) {
      if (name === "true") {
        setPercent({ true: value, false: 100 - value });
        setErr("");
      } else {
        setPercent({ true: 100 - value, false: value });
        setErr("");
      }
    } else {
      setErr("percentage value always less than 100 and greater than 0");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ((percent.true === "", percent.false === "")) {
      setErr("please enter percentage value");
    } else if (!err) {
      setData({
        datasets: [
          {
            data: [percent.true, percent.false],
            backgroundColor: ["gray", "pink"],
          },
        ],
        labels: ["true", "false"],
      });
    }
  };

  
  return (


    <div className="container">
      {err && <p style={{ color: "red" }}>{err}</p>}
      <div className="formdivs">
        <div>
          <label htmlFor="true">Box 1 : </label>
          <input
            className="inpDiv"
            type="number"
            id="true"
            name="true"
            value={percent.true}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label htmlFor="false">Box 2 : </label>
          <input
            className="inpDiv"
            type="number"
            id="false"
            name="false"
            value={percent.false}
            onChange={handleChange}
          />
        </div>
        <button className="buttnDiv" onClick={handleSubmit}>Create Chart</button>
      </div>
      <div
        className="App"
        style={{ width: "40%", height: "40%", margin: "0 auto" }}
      >
        <Pie data={data} />
      </div>
    </div>
  );
};

export default ChartMain;