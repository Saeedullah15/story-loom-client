import React, { useEffect, useState } from 'react';
import { Fade } from "react-awesome-reveal";

const Home = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("")
            .then(res => res.json())
            .then(data => {
                // console.log(data);

                setCraftItems(data);
                setLoading(false);
            })
    }, [])

    return (
        <div>
            <section className='my-20'>
                {
                    loading ?
                        <div className='flex justify-center mt-3 mb-6'>
                            {/* <span className="loading loading-spinner text-info"></span> */}
                        </div>
                        :
                        " "
                }
                <Fade>
                    <h2 className='text-2xl font-bold text-center mb-8'></h2>
                </Fade>
            </section>
        </div>
    );
};

export default Home;