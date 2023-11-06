import React from 'react';
import "./TopHome.css";

const TopHome = () => {
    return (
        <div className='tophome'>
            <div id='imgcontainer'>
                <div id='button'>
                    <div>
                        <img src="https://github.githubassets.com/assets/eyebrow-23@2x-563f292d9e30.png?width=44&format=webpll" alt="gitlogo" />
                    </div>
                    <div>
                        <h3>GitHub Universe: Dive in to AI, security, and DevEx</h3>
                        <p>Get your tickets now to join us on Nov. 8-9.</p>
                    </div>
                </div>
            </div>
            <div id='headingcontainer'>
            <h1 id='heading'>
            Let’s build from here
            </h1>
            <h2>
            The AI-powered developer platform to build, scale, and deliver secure software.
            </h2>
            </div>
        </div>
    );
};

export default TopHome;
