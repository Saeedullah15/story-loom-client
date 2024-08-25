import React from 'react';
import { useLoaderData } from 'react-router-dom';

const StoryDetails = () => {
    const storyData = useLoaderData();
    const { story, email, title } = storyData;


    return (
        <div className='my-20 space-y-2'>
            <h4 className='text-2xl font-bold text-center'>{title}</h4>
            <p className='text-sm text-center'>By: {email}</p>
            <p>{story}</p>
        </div>
    );
};

export default StoryDetails;