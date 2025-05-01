import { useState } from 'react'
import Navbar from './components/layout/Navbar';
import TextInput from './components/ui/input';
import FormSwitcher from './components/ui/FormSwitcher';
import OrderForm from './components/ui/OrderForm';
import ContactForm from './components/ui/ContactForm';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <FormSwitcher />
    </>
  )
}

export default App
