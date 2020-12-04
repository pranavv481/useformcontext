import React from 'react'
import AddressForm from './AddressForm'
import BasicForm from './BasicForm'
import ContactForm from './ContactForm'

const Form = (props) => {
    const {methods} = props
    const onSubmit = data => console.log(data);
    return (
        <form onSubmit={methods.handleSubmit(onSubmit)}>
            <BasicForm />
            <AddressForm />
            <ContactForm />
            <button className="btn btn-primary">Submit</button>
        </form>
    )
}

export default Form
