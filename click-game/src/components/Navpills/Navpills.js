
import React from "react";
import "./Navpills.css";

const Navpills = props => (
    <div>
        <ul className="nav nav-pills nav-justified">
            <a href="/">Hero Clicky Game!!</a>
            <br></br>
            <a>Score: {props.currentScore}</a>
        </ul>
    </div>
);

export default Navpills;
