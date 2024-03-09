import { MongoClient } from "mongodb";

import MeetupList from "../components/meetups/MeetupList";

const page = (props) => {
  return (
    <div>
      <MeetupList meetups={props.meetups} />
    </div>
  );
};
export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://arunannu:e88e5YpMltkeTwmX@cluster0.nclcqgz.mongodb.net/meetup?retryWrites=true&w=majority&appName=Cluster0"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();
  client.close();
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10,
  };
}
export default page;
