import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle2, XCircle, Loader2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import BG from '../../assets/images/SVG/BG.svg'
import Map from '../../assets/images/SVG/Locations/map.svg'
import MapXL from '../../assets/images/SVG/Locations/mapBig.svg'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    countryCode: '',
    text: ''
  })
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false
  })
  const [errorText, setErrorText] = useState({
    name: '',
    email: '',
    phone: ''
  })
  const [submitStatus, setSubmitStatus] = useState('idle')
  const [showNotification, setShowNotification] = useState(false)
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const validateName = (name) => {
    const letters = /^[A-Za-z ]+$/
    return name.match(letters) ? true : false
  }

  const validateEmail = (email) => {
    const emailExtension = email.split('@')[1]
    const blacklistedMails = ['gmail.com', 'yahoo.com', 'live.com', 'outlook.com', 'hotmail.com', 'aol.com']
    if (blacklistedMails.includes(emailExtension)) {
      return false
    }
    const re = /[^\s@]+@[^\s@]+\.[^\s@]+/gi
    return email.match(re) ? true : false
  }

  const validatePhone = (countryCode, number) => {
    const validCountryCode = countryCode.match('^\\+[0-9]{1,4}$')
    const validNumber = number.match('^[0-9]{10}$')
    return validCountryCode && validNumber
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    let newValue = value

    // Apply input restrictions
    switch (name) {
      case 'name':
        newValue = value.replace(/[^A-Za-z ]/g, '')
        break
      case 'phoneNumber':
        newValue = value.replace(/\D/g, '').slice(0, 10)
        break
      case 'countryCode':
        newValue = value.replace(/[^\d+]/g, '').slice(0, 5)
        if (newValue && !newValue.startsWith('+')) {
          newValue = '+' + newValue
        }
        break
      default:
        break
    }

    setFormData(prev => ({ ...prev, [name]: newValue }))
    setErrors(prev => ({ ...prev, [name === 'countryCode' || name === 'phoneNumber' ? 'phone' : name]: false }))
    setErrorText(prev => ({ ...prev, [name === 'countryCode' || name === 'phoneNumber' ? 'phone' : name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    let isValid = true
    const newErrors = { name: false, email: false, phone: false }
    const newErrorText = { name: '', email: '', phone: '' }

    if (!validateName(formData.name)) {
      newErrors.name = true
      newErrorText.name = "Please enter a valid name"
      isValid = false
    }
    if (!validateEmail(formData.email)) {
      newErrors.email = true
      newErrorText.email = "Please enter a valid email"
      isValid = false
    }
    if (!validatePhone(formData.countryCode, formData.phoneNumber)) {
      newErrors.phone = true
      newErrorText.phone = "Enter valid phone number"
      isValid = false
    }

    setErrors(newErrors)
    setErrorText(newErrorText)

    if (!isValid) {
      setTimeout(() => {
        setErrorText({ name: '', email: '', phone: '' })
      }, 3000)
      return
    }

    setSubmitStatus('submitting')

    try {
      const response = await fetch("https://fqd16nvoxi.execute-api.us-east-1.amazonaws.com/dev/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({
          ...formData,
          phoneNumber: `${formData.countryCode}${formData.phoneNumber}`,
          template: "CONTACT_US",
        }),
      })

      const result = await response.json()

      if (result.status !== "ERROR") {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', phoneNumber: '', countryCode: '', text: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    }

    setShowNotification(true)

    setTimeout(() => {
      setShowNotification(false)
      setSubmitStatus('idle')
    }, 5000)
  }

  const shakeAnimation = {
    x: [0, -10, 10, -10, 10, 0],
    transition: { duration: 0.6 }
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans relative">
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed right-4 top-4 z-50"
          >
            {submitStatus === 'success' && (
              <Alert className="bg-green-500 text-white">
                <CheckCircle2 className="h-4 w-4" />
                <AlertTitle>Success</AlertTitle>
                <AlertDescription>Your message has been sent successfully.</AlertDescription>
              </Alert>
            )}
            {submitStatus === 'error' && (
              <Alert className="bg-red-500 text-white">
                <XCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>There was an error sending your message. Please try again.</AlertDescription>
              </Alert>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex-1 flex flex-col mt-[20vh] lg:mt-[25vh]">
        <div className=" flex flex-col items-center justify-center px-4">
          <div className="flex justify-center items-center absolute top-0 left-0 right-0 h-64 bg-transparent">
            <img src={BG} alt="Background" />
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight text-center mb-4 z-10 leading-tight">
            Let's level up your
          </h1>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight text-center mb-8 z-10 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              technology, together
            </span>
          </h1>
          
          <p className="text-center text-gray-400 z-10 text-sm md:text-2xl font-light">
            You can reach us any time Via: contactus@infoservices.com
          </p>
        </div>

        <div className="flex-1 flex flex-col md:flex-row gap-8 items-start px-4 py-8 max-w-6xl mx-auto w-full">
          <div className="flex-1 relative w-full md:w-1/2 p-4 md:p-0">
            <div className="w-full rounded-lg overflow-hidden bg-black-900 flex flex-col items-center justify-center text-center">
              <div className="w-full h-0 pb-[75%] relative rounded-md overflow-hidden">
                <img
                  src={windowWidth < 768 ? MapXL : Map}
                  alt={windowWidth < 768 ? "Map-World" : "Map-USA"}
                  className= {windowWidth < 768 ? "absolute top-0 left-0  h-full" : "absolute top-0 left-0  h-full object-cover"}
                />
              </div>
            </div>
          </div>
          
          <div className="flex-1 w-full md:w-1/2 p-4 md:p-0">
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div animate={errors.name ? shakeAnimation : {}}>
                <input
                  type="text"
                  name="name"
                  placeholder={errorText.name || "Your Name"}
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full bg-black text-white border-b ${errors.name ? 'border-red-500 text-red-500 placeholder-red-500' : 'border-white'} pb-2 pt-1 focus:outline-none focus:border-white transition-colors text-sm sm:text-base font-light placeholder-gray-400`}
                />
              </motion.div>
              <motion.div animate={errors.email ? shakeAnimation : {}}>
                <input
                  type="email"
                  name="email"
                  placeholder={errorText.email || "Your Email"}
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-black text-white border-b ${errors.email ? 'border-red-500 text-red-500 placeholder-red-500' : 'border-white'} pb-2 pt-1 focus:outline-none focus:border-white transition-colors text-sm sm:text-base font-light placeholder-gray-400`}
                />
              </motion.div>
              <motion.div animate={errors.phone ? shakeAnimation : {}}>
                <div className="flex">
                  <div className="w-24 mr-2">
                    <input
                      type="text"
                      name="countryCode"
                      placeholder={errorText.phone ? "Code" : "+1"}
                      value={formData.countryCode}
                      onChange={handleChange}
                      className={`w-full bg-black text-white border-b ${errors.phone ? 'border-red-500 text-red-500 placeholder-red-500' : 'border-white'} pb-2 pt-1 focus:outline-none focus:border-white transition-colors text-sm sm:text-base font-light placeholder-gray-400`}
                    />
                  </div>
                  <div className="flex-1">
                    <input
                      type="tel"
                      name="phoneNumber"
                      placeholder={errorText.phone || "Your Phone Number"}
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className={`w-full bg-black text-white border-b ${errors.phone ? 'border-red-500 text-red-500 placeholder-red-500' : 'border-white'} pb-2 pt-1 focus:outline-none focus:border-white transition-colors text-sm sm:text-base font-light placeholder-gray-400`}
                    />
                  </div>
                </div>
              </motion.div>
              <div>
                <textarea
                  name="text"
                  placeholder="Tell Us a Little About What You Need"
                  value={formData.text}
                  onChange={handleChange}
                  className="w-full bg-black text-white border-b border-white pb-2 pt-1 focus:outline-none focus:border-white transition-colors resize-none text-sm sm:text-base font-light placeholder-gray-400"
                  rows={3}
                />
              </div>
              <div className="flex justify-center pt-4">
                <Button
                  type="submit"
                  disabled={submitStatus === 'submitting'}
                  className="px-12 py-2 bg-transparent border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors text-sm font-light disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitStatus === 'submitting' ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    'Submit'
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}