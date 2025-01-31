import React, { useEffect, useState } from 'react';

const Loading = () => {
    const facts = [
        "JavaScript was created in 10 days.",
        "JavaScript is also known as ECMAScript.",
        "JavaScript can be used for both front-end and back-end development.",
        "JavaScript is not related to Java.",
        "JavaScript is the most popular programming language in the world."
    ];

    const [factIndex, setFactIndex] = useState(0);

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * facts.length);
        setFactIndex(randomIndex);
    }, []);

    return (
        <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh', backgroundColor: '#f8f9fa' }}>
            <div className="spinner-border gradient-spinner mb-3" role="status" style={{ width: '10rem', height: '10rem' }}>
                <span className="sr-only"></span>
            </div>
            <div className="text-center">
                <p className="font-weight-bold">Loading...</p>
                <p className="text-muted">{facts[factIndex]}</p>
            </div>
        </div>
    );
};

export default Loading;