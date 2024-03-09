import React from "react";
import classes from './MeetupDetail.module.css'
const MeetupDetails = (props) => {
  return (
    <section className={classes.detail}>
      <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <address>{props.address}</address>
      
    </section>
  );
};

export default MeetupDetails;
