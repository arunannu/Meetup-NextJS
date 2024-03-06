import React, { Fragment } from "react";
import MeetupDetails from "../../components/meetups/meetupDetails";
const index = () => {
  return (
    <Fragment>
      <MeetupDetails
        image="https://nztraveltips.com/wp-content/uploads/2022/01/New-Chums-Beach-900x663.jpg"
        title="first meetup"
        address="kanpur"
        disription="this is a first meetup"
      />
    </Fragment>
  );
};

export default index;
