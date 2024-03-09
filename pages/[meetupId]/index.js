import React, { Fragment } from "react";
import { MongoClient, ObjectId } from "mongodb";
import MeetupDetails from "../../components/meetups/meetupDetails";

const Index = (props) => {
  return (
    <Fragment>
      <MeetupDetails
        image={props.meetups.image}
        title={props.meetups.title}
        address={props.meetups.address}
      />
    </Fragment>
  );
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://arunannu:e88e5YpMltkeTwmX@cluster0.nclcqgz.mongodb.net/meetup?retryWrites=true&w=majority&appName=Cluster0"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();
  return {
    fallback: true,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    "mongodb+srv://arunannu:e88e5YpMltkeTwmX@cluster0.nclcqgz.mongodb.net/meetup?retryWrites=true&w=majority&appName=Cluster0"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  
  // Correct the field to _id instead of id
  const selectedMeetup = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId),
  });

  client.close();

  return {
    props: {
      meetups: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
      },
    },
  };
}

export default Index;
