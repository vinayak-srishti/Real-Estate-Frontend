import React from 'react'
import Priv from '../components/Images/privacy.png' 
function Privacypolicy() {
    return (
        <div>
            <div className='row justify-content-center p-4 '>
                <div className='col-sm-6 col-md-9 bg-info-subtle' style={{ height: '180px' }}>
                    <img src={Priv} className='rounded mx-auto d-block' style={{ width: '100px', height: '70px', marginTop: '50px' }} alt="..." />
                    <h3 className='d-flex justify-content-center fw-bold'>Privacy-Policy</h3>
                </div>
                <div className='col-sm-6 col-md-9 g-4'>
                    <h4>Privacy Policy</h4>
                    <p>We, at Info Edge India Limited and our affiliated companies worldwide, are committed to respecting your online privacy and recognize your need for appropriate protection and management of any personally identifiable information you share with us.</p>
                    <p>This Privacy Policy (“Policy”) governs our website available at 99acres.com and our mobile application (collectively, the “Platform”). The Policy describes how Info Edge India Limited (hereinafter referred to as the “Company”) collects, uses, discloses and transfers personal data of users while browsing the Platform or availing specific services therein (the “Services”).</p>
                    <p>This Policy describes how we process personal data of all users of our Platform or Services, including buyers, renters, owners, dealers, brokers, and website visitors.</p>
                    <p>“Personal Data” means any data about an individual who is identifiable by or in relation to such data.</p>
                    <p>By providing your consent to this Policy, either on the Platform or through other means, or accessing the Platform and Services, you consent to the Company’s processing of your Personal Data in accordance with this Policy. Where required, for processing your Personal Data for distinct purposes, we seek your consent separately on the Platform or through other means.</p>
                    <p>This Privacy Policy is divided into the following sections:</p>
                    <ol>
                        <li> Personal Data we collect</li>
                        <li>How we use your Personal Data</li>
                        <li>Who we share your Personal Data with</li>
                        <li>Data storage and retention</li>
                        <li>Your rights</li>
                        <li>Data protection practices</li>
                        <li>Third party websites, apps and services</li>
                    </ol>
                    <p ><h4>Personal Data we collect:</h4></p>
                    <ol type='A'>
                        <li className='fw-bolder'>Information you give us: </li>
                            <p>We collect information you provide to us directly when you use our Platforms (like when you sign-up/ register an account, or post a property listings). We may also collect this information over calls, emails, messages, or other communications established with you to create, update or maintain your details on the Platform. Further, We may also collect this information when you provide it by filling out relevant forms to express your interest in availing our Services. This information includes:</p>
                    
                    <ul  style={{listStyle:'disc'}}>
                        <li><b>Personal Details:</b> This includes your name, contact information (like addresses, e-mail addresses, phone number), and login information (like username).</li>
                    
                        <li><b>Property Details:</b> This includes the details of the property such as nature the of property (like commercial, residential, etc), location details, property profile (like area, dimensions, road connectivity), photographs of your property (if any), pricing details and details of the amenities.</li>
                   
                        <li><b>Payment Information:</b> We use third-party payment service providers to process your payments. You will be re-directed to a third-party interface which will collect the required information from you to process the payment transaction. The payment transaction will also be governed by the policies of such third-party service provider, including their privacy policy. We may receive certain transaction details from third-party payment service providers. However, we do not store and do not have access to your financial information such as your bank account numbers, credit/ debit card numbers, or UPI handle.</li>
                    
                        <li><b>Communications Details:</b> This includes records of your calls, emails, messages or your communications in other forms related to any feedback, comments, queries, issue reports, customer support, or other communications that you send to us, among other things.</li>
                    
                        <li>Any other information that you provide to us with your permissions, consents or preferences.</li>
                    </ul>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default Privacypolicy