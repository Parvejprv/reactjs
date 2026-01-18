import React from "react";
import { Bookmark } from "lucide-react";
const Card = (props) => {
  return (
    <div className="card">
      <div className="top">
        <img src={props.img} alt={props.alt} title={props.title} />
        <button>
          Save <Bookmark size={12} />
        </button>
      </div>
      <div className="center">
        <h3>
          {props.company}
          <span>{props.dateOfPosting}</span>{" "}
        </h3>
        <h2>{props.role}</h2>
        <div className="tag">
          <h4>{props.tag}</h4>
          <h4>{props.tag2}</h4>
        </div>
      </div>
      <div className="bottom">
        <div className="billable">
          <h3>{props.rate}</h3>
          <p>{props.location}</p>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  );
};

export default Card;
