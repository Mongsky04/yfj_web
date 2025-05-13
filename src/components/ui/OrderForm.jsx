import { useState } from "react";
import TextInput from "./input";

export default function OrderForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const contact = form.contact.value;
    const email = form.email.value;
    const location = form.location.value;
    const date = form.date.value;
    const business = form.business.value;
    const phone = form.number.value;
    const guestCount = form.guestCount.value;
    const serviceType = form.serviceType.value;
    const description = form.description.value;

    const to = "Sales@yulianajuice.com";
    const subject = `New Order from ${contact}`;
    const body = [
      `Contact Name: ${contact}`,
      `Email:        ${email}`,
      `Location:     ${location}`,
      `Date:         ${date}`,
      `Business:     ${business}`,
      `Phone:        ${phone}`,
      `Guests:       ${guestCount}`,
      `Service:      ${serviceType}`,
      ``,
      `Details:`,
      `${description}`,
    ].join("\n");

    const mailtoLink =
      `mailto:${to}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <>
      <div className="flex items-center h-[70px] text-[28px] font-bold m-5 mb-0 font-montserrat">
        <p>Let us know your order!</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="h-[400px] m-10 my-0 flex justify-center">
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

            <TextInput
              id="location"
              name="location"
              label="Location"
              placeholder="Write your company address"
            />

            <TextInput
              id="date"
              name="date"
              label="Date"
              type="date"
              placeholder="Date…"
              helperText="Date you wish this order to be addressed"
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

            <TextInput
              id="guestCount"
              name="guestCount"
              label="Number of People"
              placeholder="Number of People…"
              helperText="How many people will this order serve?"
            />

            <TextInput
              id="serviceType"
              name="serviceType"
              label="Services"
              as="select"
              placeholder="Choose a service"
              options={[
                { value: "event", label: "Event" },
                { value: "wholesale", label: "Wholesale" },
                { value: "custom", label: "Custom Order and Branding" },
                { value: "b2b", label: "B2B" },
                { value: "other", label: "Other" },
              ]}
            />
          </div>
        </div>

        <div className="m-10 my-0 flex">
          <div className="flex flex-1">
            <TextInput
              id="description"
              name="description"
              label="Details"
              placeholder="Your details…"
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
            Submit Order
          </button>
        </div>
      </form>
    </>
  );
}
