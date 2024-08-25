import React, { useEffect, useState } from 'react';
import { Fade } from "react-awesome-reveal";
import Banner from '../../components/Banner';
import Story from './Story';

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [stories, setStories] = useState([]);

    useEffect(() => {
        fetch("https://story-loom-server.vercel.app/stories")
            .then(res => res.json())
            .then(data => {
                // console.log(data);

                setStories(data);
                setLoading(false);
            })
    }, [])

    return (
        <div>
            <Banner></Banner>
            <section className='my-20'>
                {
                    loading ?
                        <div className='flex justify-center mt-3 mb-6'>
                            <span className="loading loading-spinner text-info"></span>
                        </div>
                        :
                        " "
                }
                <Fade>
                    <div className='grid md:grid-cols-2 gap-10'>
                        {
                            stories.map(eachStory => <Story
                                key={eachStory._id}
                                eachStory={eachStory}
                            ></Story>)
                        }
                    </div>
                </Fade>
            </section>
        </div>
    );
};

export default Home;