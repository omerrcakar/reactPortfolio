import { CONTACT } from "../constants"

const ContactForm = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
        <h1 className="my-10 text-center text-4xl">
            Get in Touch
        </h1>
        <div className="text-center tracking-tighter">
            <a href="#" className="border-b">{CONTACT.email}</a>
            
        </div>

    </div>
  )
}

export default ContactForm