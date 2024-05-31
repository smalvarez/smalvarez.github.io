import React from "react";
import "./Main.css";
import logo from "./logo.png"; // Path to the logo image

const Main = () => {
  return (
    <main className="main">
      <img src={logo} alt="Logo" className="logo" />
      <table className="schedule-table">
        <thead>
          <tr>
            <th>Month</th>
            <th>Day</th>
            <th>Time</th>
            <th>DMV Staff</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nov</td>
            <td>17</td>
            <td>5:00PM</td>
            <td>Peter Smith</td>
          </tr>
          <tr>
            <td>Nov</td>
            <td>18</td>
            <td>9:00AM</td>
            <td>Lucas Potter</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
};

export default Main;
