import { useState } from 'react'
 import TextInput from './input'
 
 
 function OrderForm() {
   const [count, setCount] = useState(0)
 
   return (
     <>
     <div className='flex items-center h-[70px] text-[28px] font-bold m-5 mb-0'>
       <p>Let us know your order!</p>
     </div>
 
     <div className='h-[400px] m-10 my-0 flex justify-center'>
       <div className='flex-1 flex flex-col space-y-10'>
       <TextInput
         id="contact"
         label="Contact Name"
         placeholder="Contact name.."
         helperText="What's your name or wish to be addressed as?"
       />
 
       <TextInput
         id="email"
         label="Email"
         type="email"
         placeholder='email@gmail.com'
         helperText='Your email will not be shared.'
       />
 
       <TextInput
         id="location"
         label="Location"
         placeholder="Write your company address"
       />
 
       <TextInput
         id="date"
         label="Date"
         type="date"
         placeholder="Date.."
         helperText='Date you wish this order to be addressed'
       />
       </div>
       
       <div className='flex-1 flex flex-col space-y-10'>
       <TextInput
         id="business"
         label="Name of Business"
         placeholder="Name of Business.."
       />
 
       <TextInput
         id="number"
         label="Phone Number"
         placeholder='Phone Number..'
         helperText='Your phone number will not be shared.'
       />
 
       <TextInput
         id="number"
         label="Number of People"
         placeholder="Number of People.."
         helperText='How many people will this order serve?'
       />
 
       
      <TextInput
        id="serviceType"
        label="Services"
        as="select"         // ← not `type`
        placeholder="Choose a service"
        options={[
          { value: 'event',    label: 'Event' },
          { value: 'wholesale',label: 'Wholesale' },
          { value: 'custom',   label: 'Custom Order and Branding' },
          { value: 'b2b',      label: 'B2B' },
          { value: 'other',    label: 'Other' },
        ]}
      />

       </div>
     </div>
 
     <div className="m-10 my-0 flex">
       <div className="flex flex-1">
         <TextInput
           id="description"
           label="Details"
           placeholder="Your detail…"
           as="textarea"      
           rows={2}               
           className="!max-w-full"
         />
       </div>
     </div>
     </>
   )
 }
 
 export default OrderForm