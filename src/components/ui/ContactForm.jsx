import { useState } from 'react'
import TextInput from './input'

export default function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const contact   = form.contact.value
    const email     = form.email.value
    const business  = form.business.value
    const phone     = form.number.value
    const message   = form.description.value

    const to      = 'sales@yulianajuice.com'
    const subject = `New Message from ${contact}`
    const body = [
      `Contact Name: ${contact}`,
      `Email:        ${email}`,
      `Business:     ${business}`,
      `Phone:        ${phone}`,
      ``,
      `Message:`,
      `${message}`
    ].join('\n')

    const mailtoLink =
      `mailto:${to}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`

    window.location.href = mailtoLink
  }

  return (
    <>
      <div className="flex items-center h-[70px] text-[28px] font-bold m-5 mb-0 font-montserrat">
        <p>Contact Us!</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="h-[210px] m-10 my-0 flex justify-center">
          <div className="flex-1 flex flex-col space-y-10">
            <TextInput
              id="contact"
              name="contact"
              label="Contact Name"
              placeholder="Contact name…"
              helperText="What's your name or wish to be addressed as?"
            />

            <TextInput
              id="email"
              name="email"
              label="Email"
              type="email"
              placeholder="email@gmail.com"
              helperText="Your email will not be shared."
            />
          </div>
          
          <div className="flex-1 flex flex-col space-y-10">
            <TextInput
              id="business"
              name="business"
              label="Name of Business"
              placeholder="Name of Business…"
            />

            <TextInput
              id="number"
              name="number"
              label="Phone Number"
              placeholder="Phone Number…"
              helperText="Your phone number will not be shared."
            />
          </div>
        </div>

        <div className="m-10 my-0 flex">
          <div className="flex flex-1">
            <TextInput
              id="description"
              name="description"
              label="Message"
              placeholder="Your message…"
              as="textarea"
              rows={2}
              className="!max-w-full"
            />
          </div>
        </div>

        <div className="m-10 flex justify-center">
          <button
            type="submit"
            className="
              px-6 py-3 
              bg-green-500
              text-white 
              rounded-lg 
              text-sm 
              font-inter 
              hover:bg-green-400
              transition
              active:bg-green-200
            "
          >
            Send Message!
          </button>
        </div>
      </form>
    </>
  )
}
