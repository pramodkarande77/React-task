import React, { useState } from "react";
// import "./TaskChart.css";
import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJs.register(Tooltip, Title, ArcElement, Legend);
const ChartMain = () => {
  const [percent, setPercent] = useState({
    true: " ",
    false: " ",
  });
  const [err, setErr] = useState("");
  const [data, setData] = useState({
    datasets: [
      {
        data: [ ],
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
      
      setErr("Enter Value Greater than 0 & Less than 100");
      
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ((percent.true === "", percent.false === "")) {
      setErr(" Required Enter Percentage Value");
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


    <div className="container mt-4">
      {err && <p style={{ color: "red" }}>{err}</p>}
      
      <div className="row col-sm-8 mx-auto mb-3">
      <div className=""></div>
        <div className="col-sm-5">
          <label htmlFor="true">Box 1</label>
          <input
          className="form-control"
            type="number"
            id="true"
            name="true"
            value={percent.true}
            onChange={handleChange}
          />
        </div>
        <div className="col-sm-5">
          <label htmlFor="false">Box 2</label>
          <input
            className="form-control"
            type="number"
            id="false"
            name="false"
            value={percent.false}
            onChange={handleChange}
          />
        </div>
        <div>
        <button className="btn btn-primary rounded-pill mt-4" onClick={handleSubmit}>Create Chart</button>
        </div>

      </div>
       

      
      <div
        className="App"
        style={{ width: "35%", height: "35%", margin: "0 auto" }}
      >
        <Pie data={data} />
      </div>
    </div>
  );
};

export default ChartMain;