import React from 'react';
import './disclaimer.css';

const DisclaimerPage = () => {
    return (
        <div className='disclaimer-page' style={{margin: "auto"}}>
            <div className='disclaimer-container'>
                <h3>Disclaimer</h3> 
                <p>By using this site you agree to this policy: </p>
                <p className='description-heading bold'>Returns & Cancellations </p>
                <ul>
                    <li>There is a call out-fee to be charged, every time we have to go out to a prospective or 
                existing client, even if the product is new </li>
                    <li>In the event of a cancellation of services subsequently to a verbal or written agreement, the 
                client will be held liable for the full amount agreed upon in case where the stock/order has 
                already been purchased</li>
                    <li>The full amount is payable within 7 days after completion of the work upon the agreement</li>
                    <li>We advise our clients to engage into a healthy lifestyle by maintaining their water purifiers 
                on a regular basis within 6 months.  This will also lengthen the life duration of our client’s 
                water purifiers </li>
                </ul>
                <p className='description-heading bold'>Damage policy</p>
                <ul>
                    <li>After 14 days of installation, Kroon-water will not be held liable for any direct, indirect, 
                incidental, special or consequential damages that result from a client’s use or inability to use </li>
                </ul>
                <p className='description-heading bold'>Trademarks </p>
                <ul>
                    <li>The logo and other trademarks,  service marks and trade names (the “marks”) used to 
                identify Kroon-water’s products and services are the exclusive property of Kroon-water </li>
                </ul>
            </div>
        </div>
    )
}

export default DisclaimerPage