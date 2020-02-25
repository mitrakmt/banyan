import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import roles from "./salaryData.json";

import "./salaryCalculator.scss";

function SalaryCalculator() {
  const [selectedRole, setSelectedRole] = useState("marketing");
  const engineerSalary = {
    salaries: [47000, 69737, 96201, 118550, 160000],
    juniorSalary: 69737,
    midSalary: 89201,
    seniorSalary: 112550
  };

  let data = {
    labels: ["", "Junior Salary", "Mid Level Salary", "Senior Salary", ""],
    datasets: [
      {
        label: ["Avg. Engineer Salary"],
        fill: false,
        lineTension: 0.1,
        backgroundColor: "red",
        borderColor: "red",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "red",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 5,
        pointHoverRadius: 8,
        pointHoverBackgroundColor: "red",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: engineerSalary.salaries
      },
      {
        label: roles[selectedRole].name,
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 5,
        pointHoverRadius: 8,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: roles[selectedRole].salaries
      }
    ]
  };

  const legend = {
    display: true,
    position: "top",
    fullWidth: true,
    reverse: false,
    labels: {
      fontColor: "rgb(255, 99, 132)"
    }
  };

  const changeSelectedRole = event => {
    setSelectedRole(event.target.value);
  };

  return (
    <div className="salaryCalculator">
      <h2 className="salaryCalculator-header">Salary Calculator</h2>
      <div className="salaryCalculator-container">
        <div className="salaryCalculator-container-child">
          <select
            onChange={changeSelectedRole}
            className="salaryCalculator-select"
          >
            {Object.keys(roles).map(key => {
              return (
                <option key={key} value={key}>
                  {roles[key].name}
                </option>
              );
            })}
          </select>
          <h5>
            Immediate potential salary increase:{" "}
            <span className="salaryCalculator-boldText">
              $
              {(
                engineerSalary.midSalary - roles[selectedRole].midSalary
              ).toLocaleString()}
            </span>{" "}
            / yr
          </h5>
          <h5>
            3 year potential salary increase:{" "}
            <span className="salaryCalculator-boldText">
              $
              {(
                engineerSalary.seniorSalary - roles[selectedRole].seniorSalary
              ).toLocaleString()}
            </span>{" "}
            / yr
          </h5>
        </div>
        <div className="salaryCalculator-chart">
          <Line
            data={data}
            height={400}
            options={{ maintainAspectRatio: false }}
            legend={legend}
            className="salaryCalculator-chart"
          />
        </div>
      </div>
    </div>
  );
}

export default SalaryCalculator;
