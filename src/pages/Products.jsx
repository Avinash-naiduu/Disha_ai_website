import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './css/Terms.css';

const ProductServices = () => {
    return (
        <div className="container my-5 terms-container">
            <h1 className="terms-title">Products/Services</h1>
            <p className="terms-paragraph">
                DishaAI is a holistic education technology provider. It provides continuous assessment, complementary educational programs and Enterprise Systems to aid Schools to create a seamlessly integrated pedagogy for Students. As part of holistic assessment process, we conduct one test to all the registered students
            </p>

            <p className="terms-paragraph"> Pricing</p>
            <p className="terms-paragraph"> Here are the steps
                <ul className="terms-paragraph">
                    <li>
                    Student register in our website and create and account 
                    </li>
                    <li>
                    We will send unique credentials to registered mail id 
                    </li>
                    <li>
                    With unique credentials student has to login and make the payment of Rs.250/- as assessment fee 
                    </li>
                </ul>
            </p>
        </div>
    );
};

export default ProductServices;
