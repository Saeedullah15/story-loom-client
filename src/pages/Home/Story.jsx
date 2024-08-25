import React from 'react';
import { Link } from 'react-router-dom';

const Story = ({ eachStory }) => {
    const { _id, image, title } = eachStory;

    return (
        <Link to={`/storyDetails/${_id}`}>
            <div className="card card-compact bg-base-100 w-full shadow-xl">
                <figure className='h-72'>
                    <img src={image} alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                </div>
            </div>
        </Link>
    );
};

export default Story;