import React from 'react'
import Saf from '../components/Images/safety.png'

function Saftey() {
    return (
        <div>
            <div className='row justify-content-center p-4 user-select-none'>
                <div className='col-sm-6 col-md-9 bg-info-subtle' style={{ height: '180px' }}>
                    <img src={Saf} className='rounded mx-auto d-block' style={{ marginTop: '70px', height: '50px', width: '50px' }} alt="..." />
                    <h3 className='d-flex justify-content-center fw-bold'>Safety Guide</h3>
                </div>
                <div className='col-sm-6 col-md-7 g-4' style={{ textAlign: 'justify' }}>
                    <h4>Beware - Use your Judgment</h4>
                    <p>It is in the interests of a user to exercise his/her best judgment to assess properties' and owners' authenticity. The claims being made may or may not be correct, a user is therefore advised to independently verify the authenticity of the claims being made. To this end, we have compiled a checklist which may help a user avoid deceit. We recommend that all our users MUST go through the checklist (mentioned below) prior to purchasing or renting a house.</p>
                </div>
                <div className='col-sm-6 col-md-7'>
                    <h4>How to Avoid Real Estate Fraud?</h4>
                </div>
                <div className='col-sm-6 col-md-7 align-self-stretch' >
                    <ul>
                        <li style={{ textAlign: 'justify' }}>Do not send money online to a 'supposed landlord/owner' using UPI, net banking, debit/credit cards, etc. if you have not met them personally.</li>
                        <li>We do not recommend paying any property visit charges, gate pass charges, booking amount etc. over a call.</li>
                        <li>In case a broker is showing you the property, make sure that you meet the owner or have a web session with him.</li>
                        <li>Do not handover any part of the consideration/rent to the broker.</li>
                        <li>Talk to some neighbours and make sure that the one who is showing you the property is the actual owner</li>
                    </ul>
                </div>
                <div className='col-sm-6 col-md-7 '>
                    <div className='d-inline-flex'>
                        <h4>For a Buyer/Investor</h4>
                    </div>
                    <p>The buyer should conduct checks and establish authenticity of any property, or project, its title, built up area (in standardized unit), suitability for buying in a form and manner deemed appropriate at his or her COST.
                        99acres.com being an advertising medium does not and can not vouch for authenticity of content on its site. A lot of content is uploaded by the advertiser and we do not filter or verify the same. If a complaint is made, we will take remedial measures.</p>
                    <p>Certain points to bear in mind:</p>
                    <ul>
                        <li>Conduct a comprehensive check of ownership to verify developer's/owners' credentials.</li>
                        <il>Visit the project site/property personally, to ensure that the broker's or developer's claim is genuine and that the property is not an 'imaginary' one.</il>
                        <li>Opt for a builder with good track record, checking the past record of the promoters may be helpful.</li>
                        <li>Beware of false title documents. Loans may have been secured against properties that may be disputed or have remained vacant for long.</li>
                        <li>It is always advisable that proper due diligence on the property is conducted prior to entering into a transaction related to a real estate.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Saftey