
import React from "react";
import "./HeroCard.css";

const HeroCard = props => (
    <div className="card">
        <div className="img-container">
            <a onClick={() => props.selectHero(props.breed)} 
                className={props.currentScore === 0 ? "style_prevu_kit style_prevu_kit_ex" : "style_prevu_kit"}
            >
                <img alt={props.breed} src={props.image} />
            </a>
        </div>
    </div>
);

export default HeroCard;