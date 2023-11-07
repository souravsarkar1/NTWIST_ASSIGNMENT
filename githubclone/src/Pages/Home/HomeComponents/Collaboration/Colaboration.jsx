import React from 'react'
import "./Colaboration.css"
const Colaboration = () => {
    return (
        <div className='collaboratin'>
            <div className='collaboraionfristchild'>
                <p>Collaboration</p>
                <h1>Supercharge collaboration. We provide unlimited repositories, best-in-class version control, and the world’s most powerful open source community—so your team can work more efficiently together.</h1>
            </div>
            <div className='collaboraionsecondchild'>
                <img src="https://github.githubassets.com/assets/issues-plan-3282274c574b.png?width=1500&format=webpll" alt="" />
            </div>
            <div className='collaboraionthirdchild'>
                <div>
                    <h1>GitHub Issues and GitHub Projects supply flexible project management tools that adapt to your team alongside your code.</h1>
                    <h2>Explore GitHub Issues {">"}</h2>
                </div>
                <div>
                    <img src="https://github.githubassets.com/assets/illu-projects-a97f6088923d.png" alt="logo" />
                </div>

            </div>
            <div className='advitagement'>
                <button>Did You Know?</button>
                <h1>80% reduction</h1>
                <h3>in onboarding time with GitHub1</h3>
            </div>
            <div className='collaboraionforthchild'>

                <div className='bottomchild'>
                    <div>
                        <h1>GitHub Discussions create space to ask questions and have open-ended conversations.</h1>
                        <button>Enable GitHub Discussions</button>
                        <img src="https://github.githubassets.com/assets/illu-discussions-6aab2000e0ec.png?width=724&format=webpll" alt="" />
                    </div>
                    <div>
                        <h1>Pull requests allow real-time communication and collaboration about code changes.</h1>
                        <button>Check out pull requests </button>
                        <img src="https://github.githubassets.com/assets/illu-pull-requests-743b2b360e1f.png?width=724&format=webpll" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Colaboration