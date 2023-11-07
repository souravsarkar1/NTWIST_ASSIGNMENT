import React from 'react';
import "./LastImage.css";

const LastImage = () => {
    return (
        <div className="image-container">
            <div className='heading-last-img'>
                <h1>The place for anyone from anywhere to build anything</h1>
                <h2>Whether you’re scaling your startup or just learning how to code, GitHub is your home. Join the world’s largest developer platform to build the innovations that empower humanity. Let’s build from here.</h2>
                <button>Signup for GitHub</button>
                <button>Start a Free Enterprise trial</button>
            </div>
            <div className="rotating-image">
                <img src="https://i.postimg.cc/667M3tSr/download.png" alt="" />
            </div>
            <div className="fixed-image">
                <img src="https://github.githubassets.com/assets/astrocat-c96b6ce0d913.png" alt="" />
            </div>
        </div>
    )
}

export default LastImage;
