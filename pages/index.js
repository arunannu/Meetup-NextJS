import React from "react";
import MeetupItem from "../components/meetups/MeetupItem";

const page = () => {
  const Dummy_meetups = [
    {
      id: "m1",
      title: "first meetup",
      image:
        "https://nztraveltips.com/wp-content/uploads/2022/01/New-Chums-Beach-900x663.jpg",
      address: "Nature",
    },
    {
      id: "m2",
      title: "second meetup",
      image:
        "https://images.pexels.com/photos/236047/pexels-photo-236047.jpeg?cs=srgb&dl=clouds-cloudy-countryside-236047.jpg&fm=jpg",
      address: "Nature",
    },
    {
      id: "m3",
      title: "third meetup",
      image:
        "https://images.pexels.com/photos/371589/pexels-photo-371589.jpeg?cs=srgb&dl=clouds-conifer-daylight-371589.jpg&fm=jpg",
      address: "Nature",
    },
    {
      id: "m4",
      title: "forth meetup",
      image:
        "https://images.pexels.com/photos/1188083/pexels-photo-1188083.png?cs=srgb&dl=sea-dawn-nature-1188083.jpg&fm=jpg",
      address: "Nature",
    },
    {
      id: "m5",
      title: "fivth meetup",
      image:
        "https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?cs=srgb&dl=bloom-blooming-blossom-462118.jpg&fm=jpg",
      address: "Nature",
    },
  ];
  return (
    <div>
     
      
        {Dummy_meetups.map((meetup) => (
          <MeetupItem
            key={meetup.id}
            image={meetup.image} // Make sure to pass the image prop
            title={meetup.title}
            address={meetup.address}
          />
        ))}
     
    </div>
  );
};

export default page;
