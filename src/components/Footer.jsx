import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="footer footer-center bg-[#12132d15] xl:p-20 lg:p-20 p-10">
            <div className="w-full pb-10 border-b border-[#30325E1A]">
                <div className="mb-2">
                    <a href="" className="text-3xl font-black text-[#12132D]">Story Loom</a>
                </div>
                <p className="text-[#12132DB3] font-bold text-xs leading-5">Thank you for being a part of the Story Loom
                    community. Connect with us on social media, and don't hesitate to reach out <br />
                    with any questions or feedback. Together, we make great stories happen.
                </p>
                <div className="flex items-center gap-7 mt-5">
                    <FaFacebook className='text-2xl cursor-pointer' />
                    <FaTwitter className='text-2xl cursor-pointer' />
                    <FaInstagram className='text-2xl cursor-pointer' />
                    <FaGithub className='text-2xl cursor-pointer' />
                </div>
            </div>
            <p className="text-[#12132D80] text-xs">Copyright © 2024 - All right reserved by Story Loom.</p>
        </footer>
    );
};

export default Footer;