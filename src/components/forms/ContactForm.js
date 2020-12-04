import React from 'react'
import {useFormContext} from "react-hook-form";
const ContactForm = () => {
    const {register} = useFormContext()
    return (
        <div className="card border-0 mb-4">
        <div className="card-header">Contact Form</div>
        <div className="card-body">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your E-mail Address"
              name="email"
              ref={register}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Phone Number"
              name="phone"
              ref={register}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Alternate Phone Number"
              name="alternate"
              ref={register}
            />
          </div>
        </div>
      </div>
    )
}

export default ContactForm
