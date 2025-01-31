import React from 'react'

const NotFound = () => {
    return (
        <div className="container text-center mt-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="error-template">
                        <h1>Oops!</h1>
                        <h2>404 Not Found</h2>
                        <div className="error-details mb-4">
                            Sorry, the page you requested could not be found.
                        </div>
                        <div className="error-actions">
                            <a href="/" className="btn btn-primary btn-lg">
                                <i className="bi bi-house-fill me-2"></i>
                                Take Me Home
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound