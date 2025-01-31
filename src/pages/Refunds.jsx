import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './css/Terms.css';

const Refunds = () => {
    return (
        <div className="container my-5 terms-container">
            <p className="texprimary">Your Consent</p>
            <h1 className="terms-title">Refunds & Cancellation</h1>
            <p className="terms-paragraph">
            We believe that, every user of our Application/Services/products/Website must be in a position to provide an informed consent prior to providing any Information required for the use of the Application/Services/products/Website. By registering with us , you are expressly consenting to our collection, processing, storing, disclosing and handling of your information as set forth in this Policy now and as amended by us. Processing, your information in any way, including, but not limited to, collecting, storing, deleting, using, combining, sharing, transferring and disclosing information, all of which activities will take place in India. If you reside outside India your information will be transferred, processed and stored in accordance with the applicable data protection laws of India.
            </p>
            <p className="terms-paragraph">
            <b>No Refunds/Cancellations</b> applicable to this product</p>
        </div>
    );
};

export default Refunds;
