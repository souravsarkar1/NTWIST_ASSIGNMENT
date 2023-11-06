import React from 'react'
import "./GithubCopilot.css"

const GitHubCoPilot = () => {
    return (
        <div className='copilotDiv'>
            <div className='topchild'>
                <div id='copilotheading'>
                    <h1>GitHub Copilot is your AI pair programmer that empowers you to complete tasks 55% faster by turning natural language prompts into coding suggestions.</h1>
                    <button>Meet GitHub Copilot {`>`} </button>
                </div>
                <div>
                    <div id='editonav'>
                        <h1>
                            draw_scatterplot.py
                        </h1>
                        <h1>
                            time.js
                        </h1>
                        <h1>
                            memoize.go
                        </h1>
                    </div>
                    <div id='editors'>
                        <textarea name="" id="" cols="30" rows="10" />
                    </div>
                </div>
            </div>
            <div className='bottomchild'>
            <div>
            <h1>GitHub Actions automates your build, test, and deployment workflow with simple and secure CI/CD.</h1>
            <button>Discover GitHub Actions </button>
            <img src="https://github.githubassets.com/assets/illu-actions-db55ffb47888.png?width=725&format=webpll" alt="" />
            </div>
            <div>
            <h1>GitHub Mobile fits your projects in your pocket, so you never miss a beat while on the go.</h1>
            <button>Get GitHub Mobile </button>
            <img src="https://github.githubassets.com/assets/illu-mobile-4d51d19f769e.png?width=724&format=webpll" alt="" />
            </div>
            </div>
        </div>
    )
}

export default GitHubCoPilot