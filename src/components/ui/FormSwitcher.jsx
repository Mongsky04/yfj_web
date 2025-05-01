import React, { useState } from 'react';
 import ContactForm from './ContactForm';
 import OrderForm from './OrderForm';
 
 const FormSwitcher = () => {
   const [showOrder, setShowOrder] = useState(false);
 
   return (
     <div className="relative h-screen bg-gray-50 m-10">
       <div className="absolute top-4 right-4 flex items-center space-x-2">
         <span className={`text-sm font-montserrat ${!showOrder ? 'text-[#FFB22C]' : 'text-gray-500'}`}>
           Contact
         </span>
         <label className="relative inline-block w-12 h-6 cursor-pointer">
           <input
             type="checkbox"
             className="sr-only peer"
             checked={showOrder}
             onChange={() => setShowOrder((v) => !v)}
           />
           <div className="absolute inset-0 bg-gray-300 rounded-full peer-checked:bg-[#FFB22C] transition-colors" />
           <div className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-6 transition-transform" />
         </label>
         <span className={`text-sm font-montserrat ${showOrder ? 'text-[#FFB22C]' : 'text-gray-500'}`}>
           Order
         </span>
       </div>
 
       <div>
         {showOrder ? <OrderForm /> : <ContactForm />}
       </div>
     </div>
   );
 };
 
 export default FormSwitcher;