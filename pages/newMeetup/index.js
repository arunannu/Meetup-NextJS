import React from 'react'
import NewMeetupForm from '../../components/meetups/NewMeetupForm'
const NewMeetupPage = () => {
    function addMeetupHandler(enteredMeetupData){
        console.log(enteredMeetupData)
    }
  return (
   
    <div>
      <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </div>
  )
}

export default NewMeetupPage
