import { useState } from "react"
import axios from "axios"
const Contacts = () => {
    const [message, setMessage] = useState({
        email: "",
        name: "",
        message: ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post(`https://formspree.io/f/manqnydk`, message);
            console.log(res)
          } catch (err) {
            console.error(err);
          }
    }
    const handleChange = (e) => {
        setMessage({
            ...message,
            [e.target.name]: e.target.value
        })
    }
    return(
        <section className="contacts">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Contact Me</legend>
                    <input required name="email" type="email" placeholder="Email" onChange={handleChange}/>
                    <input required name="name" type="text" placeholder="Name" onChange={handleChange}/>
                    <textarea required name="message" placeholder="Your Message" onChange={handleChange}></textarea>
                </fieldset>
                <button type="submit">Send Message</button>
            </form>
        </section>
    )
}

export default Contacts