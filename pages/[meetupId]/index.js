import React, { Fragment } from "react";
import MeetupDetails from "../../components/meetups/meetupDetails";
const index = () => {
  return (
    <Fragment>
      <MeetupDetails
        id="m1"
        title="first meetup"
        image="https://nztraveltips.com/wp-content/uploads/2022/01/New-Chums-Beach-900x663.jpg"
        address="Nature"
      />
    </Fragment>
  );
};
export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}
export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  console.log(meetupId);
  return {
    props: {
      meetups: {
        id: meetupId,
        title: "first meetup",
        image:
          "https://nztraveltips.com/wp-content/uploads/2022/01/New-Chums-Beach-900x663.jpg",
        address: "Nature",
      },
    },
  };
}

export default index;
