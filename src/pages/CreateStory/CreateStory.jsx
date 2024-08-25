import React from 'react';
import Swal from 'sweetalert2';

const CreateStory = () => {
    const handleCreateStory = (e) => {
        e.preventDefault();

        const form = e.target;

        const image = form.image.value;
        const title = form.title.value;
        const story = form.story.value;
        const email = form.email.value;

        const newStoryInfo = { image, title, story, email };
        // console.log(newItemInfo);

        fetch("https://story-loom-server.vercel.app/createStory", {
            method: "post",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newStoryInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success',
                        text: 'You have successfully added your story!',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })

                    form.reset();
                }
            })
    }


    return (
        <div className='my-20'>
            <div className="card bg-base-100 xl:w-2/3 md:w-5/6 mx-auto shadow-2xl">
                <h2 className='text-2xl font-bold text-center mt-6'>Create Your Story</h2>
                <form onSubmit={handleCreateStory} className="card-body space-y-2">
                    <div className="flex flex-col lg:flex-row gap-4">
                        <input type="text" name='image' className="input input-bordered w-full" placeholder="Image URL" />
                        <input type="text" name='title' className="input input-bordered w-full" placeholder="Story Tittle" />
                    </div>
                    <textarea name="story" className='border border-gray-300 rounded-lg p-4' placeholder='Write Your Story' id="story" cols="30" rows="10"></textarea>
                    <div className="flex gap-4">
                        <input type="email" name='email' className="input input-bordered w-full" placeholder="Email of the User" />
                    </div>
                    <div className="mt-6 flex justify-center">
                        <button type='submit' className="btn btn-primary w-40">Create</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateStory;