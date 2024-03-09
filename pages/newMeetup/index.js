import React from 'react';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import { useRouter } from 'next/router';

const NewMeetupPage = () => {
 const router = useRouter();
    async function addMeetupHandler(enteredMeetupData) {
        try {
            const response = await fetch('/api/new-meetup', {
                method: 'POST',
                body: JSON.stringify(enteredMeetupData),
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            if (!response.ok) {
                throw new Error('Failed to add meetup');
            }
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error adding meetup:', error.message);
        }
        router.push('/')
    }
    

    return (
        <div>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </div>
    );
};

export default NewMeetupPage;
