import { useState } from 'react'
import Navbar from './components/layout/Navbar';
import TextInput from './components/ui/input';
import FormSwitcher from './components/ui/FormSwitcher';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <FormSwitcher />

    <hr className='m-5 border-gray-400'></hr>
    <div className='flex justify-center items-center h-[70px] text-[28px] font-bold m-5 mb-0'>
      <p>Our Location</p>
    </div>
    </>
  )
}

export default App
