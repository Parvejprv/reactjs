import React from "react";

const Card = (props) => {
  console.log(props.user, props.age, props.description);   

  return (
    <div className="card">
      <img
        src={props.img}
        alt={props.title}
        title={props.alt}
      />
      <h2>{props.user}, {props.age}</h2>
      <p>{props.description}</p>
      <button>View Profile</button>
    </div>
  );
};

export default Card;
