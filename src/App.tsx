import React, { useState } from 'react'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import HowItWorks from './components/HowItWorks'
import CTA from './components/CTA'
import Footer from './components/Footer'
import ContactModal from './components/ContactModal'
import './App.css'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const handleOpenModal = () => setIsModalOpen(true)
  const handleCloseModal = () => setIsModalOpen(false)

  return (
    <div className="App">
      <Hero onOpenModal={handleOpenModal} />
      <Problem />
      <Solution />
      <HowItWorks />
      <CTA onOpenModal={handleOpenModal} />
      <Footer />
      <ContactModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  )
}

export default App
