import React, { useState } from 'react';

export default function Contact() {

    // Setting the component's initial state
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const handleFormSubmit = (event) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
        if (!formData.firstName || !formData.lastName || !formData.email) {
            //alert('Fill out your first and last name please!');
        } 

        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            message: ''
        });
    };
    return <div className="container content my-5 py-3">
        <section className="row p-4 border-1 mx-4 my-5">
            <h2 className="primary-color w-auto bg-white d-flex align-items-center">Contact Me</h2>
            <form className="needs-validation py-4" noValidate>
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingFirstName" placeholder="" name="firstName" required />
                            <label htmlFor="floatingFirstName" className="ms-1 px-2">Last Name</label>
                            <div className="invalid-feedback">
                                Please provide your first name.
                            </div>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingLastName" placeholder="" name="lastName" required />
                            <label htmlFor="floatingLastName" className="ms-1 px-2">Last Name</label>
                            <div className="invalid-feedback">
                                Please provide your last name.
                            </div>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingEmail" placeholder="name@example.com" name="email" required />
                            <label htmlFor="floatingEmail" className="ms-1 px-2">Email address</label>
                            <div className="invalid-feedback">
                                Please provide a valid email.
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="form-floating mb-3">
                            <textarea className="form-control " placeholder="Message" id="floatingMessage" name="message"></textarea>
                            <label htmlFor="floatingMessage" className="ms-1 px-2">Message</label>
                        </div>
                        <div className="col-12">
                            <button className="btn btn-secondary bg-primary-color w-100 p-3 border-0" onClick={handleFormSubmit}>Submit form</button>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    </div>
}