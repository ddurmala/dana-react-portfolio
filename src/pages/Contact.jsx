import { useState } from 'react'
import axios from 'axios'

const initialFormData = {
    fullName: '',
    email: '',
    message: '',
    access_key: 'cc106326-f1b1-45ac-a95d-1d9142d536d7'
}

function Contact() {
    const [formData, setFormData] = useState(initialFormData)

    const [alertMessage, setAlertMessage] = useState('')

    const [emailValid, setEmailValid] = useState(true)

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!emailValid) {
            setAlertMessage('Please enter a valid email address')
            return
        }

        const url = 'https://api.web3forms.com/submit'

        const res = await axios.post(url, formData)

        setAlertMessage('submission received')

        setFormData({
            ...initialFormData
        })

        setTimeout(() => {
            setAlertMessage('')
        }, 3500)
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'email') {

            const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/

            setEmailValid(emailPattern.test(value))
        }

        setFormData({
            ...formData,
            [name]: value
        })
    }

    return (
        <>
            <h2 className="contact-header text-center mt-5">Contact Me</h2>

            {alertMessage && <p className='alert-message text-center'>{alertMessage}</p>}

            <form onSubmit={handleSubmit} className="contact-form d-flex flex-column mt-3">

                <input onChange={handleInputChange} value={formData.fullName} name="fullName" type="text" placeholder="your full name" required />
                <input onChange={handleInputChange} value={formData.email} name="email" type="email" placeholder="your email address" required />
                <textarea onChange={handleInputChange} value={formData.message} name="message" rows="10" cols="30" placeholder="enter your message" required></textarea>

                <button>Send</button>
            </form>

        </>
    )
}

export default Contact