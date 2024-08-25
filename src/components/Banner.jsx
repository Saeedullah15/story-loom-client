import React from 'react';

const Banner = () => {
    return (
        <div>
            <section class="my-7">
                {/* banner container div */}
                <div
                    class="flex flex-col gap-10 xl:flex-row lg:flex-row justify-around items-center bg-[#12132D] rounded-[40px] xl:py-20 lg:py-16 py-8 bg-[url('https://i.ibb.co/7SG2spt/Stock-Snap-7-MVZZFBLI5-1.jpg')] bg-no-repeat bg-cover">
                    {/* search bar div */}
                    <div class="text-center xl:text-left lg:text-left">
                        <h2
                            class="font-black text-white xl:text-5xl lg:text-5xl text-3xl xl:leading-[65px] lg:leading-[65px] leading-10">
                            Welcome to our
                            <br /> <span
                                class="text-transparent bg-clip-text bg-gradient-to-r from-[#797dfc] to-[#797dfc42]">Storytelling </span>
                            Platform
                        </h2>
                        <p class="text-[#ffffff9c] font-semibold text-sm leading-6 mt-2 mb-8 lg:mb-5 xl:mb-5">Discover a
                            vibrant community where stories creates <br /> new stories.
                        </p>
                        {/* <label class="input input-bordered rounded-full flex items-center gap-2 pr-1">
                            <input id="search-input-field" type="text" class="grow text-xs text-[#0307128e]"
                                placeholder="search by coding, comedy or music" />
                            <button
                                class="badge badge-info bg-blueBtn text-white text-base font-bold py-5 px-7">Search
                            </button>
                        </label> */}
                    </div>

                    {/* stat div */}
                    {/* <div class="bg-white rounded-3xl p-10 space-y-3">
                        <div class="flex justify-between items-center gap-10 text-[#12132DCC] font-bold">
                            <p>Registered Users</p>
                            <p>01</p>
                        </div>
                        <div class="flex justify-between items-center text-[#12132DCC] font-bold">
                            <p>Forum</p>
                            <p>05</p>
                        </div>
                        <div class="flex justify-between items-center text-[#12132DCC] font-bold">
                            <p>Topics</p>
                            <p>08</p>
                        </div>
                        <div class="flex justify-between items-center text-[#12132DCC] font-bold">
                            <p>Replies</p>
                            <p>03</p>
                        </div>
                    </div> */}
                </div>
            </section>
        </div>
    );
};

export default Banner;