import React from 'react'
import Image from '../components/image'
import {FaFacebook, FaEnvelope} from 'react-icons/fa'


export const leftCol = () => {
    return (
        <div>
            <div className="img-wrapper">
            <Image />
            </div>
            <h1>Our new site is coming soon</h1>
            <p className="subt">If you have any queries please contact us via the contact form </p>
            <a href="tel:00441929422470">
            <p className="telno">Or call: 01929 422 470</p>
            </a>
            <div className="icons">
                <a href= "mailto:info@purbeckembroidery.co.uk">
            <FaEnvelope />
            </a>
            <a href = "https://www.facebook.com/PurbeckEmbroidery/">
            <FaFacebook />
            </a>
            </div>
        </div>
    )
}

export default leftCol
