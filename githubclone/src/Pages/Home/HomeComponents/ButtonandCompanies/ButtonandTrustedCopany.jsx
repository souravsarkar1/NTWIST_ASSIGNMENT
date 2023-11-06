import React from 'react'
import "./ButtonandTrustedCopany.css"
import { truestedCompanies } from '../../HomeData/HomeBodyData/HomeBody'
const ButtonandTrustedCopany = () => {
    return (
        <div className='inputcontainertrustedcompany'>
            <div id='inputfield'>
                <input type="text" placeholder='Enter Your Email ID' />
                <button>Signup For GitHub</button>
                <button id='trail'>Start a Free Trial</button>
            </div>
            <div>
                <h1>Trusted by the world’s leading organizations</h1>
                <div id='comapnies'>
                {truestedCompanies.map((item) => (
                    <div key={item.id}>
                        <img src={item.img} alt="logo" />
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}

export default ButtonandTrustedCopany