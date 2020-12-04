import React from 'react'
import {useFormContext} from "react-hook-form";
const BasicForm = () => {
    const {register} = useFormContext()
    return (
        <div className="card border-0 mb-4">
        <div className="card-header">Basic Form</div>
        <div className="card-body">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your First Name"
              name="firstname"
              ref={register}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Middle Name"
              name="middlename"
              ref={register}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Last Name"
              name="lastname"
              ref={register}
            />
          </div>
        </div>
      </div>
    )
}

export default BasicForm
