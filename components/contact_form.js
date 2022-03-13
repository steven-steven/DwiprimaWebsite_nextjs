import { useState } from 'react'

export default function ContactForm() {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => { 
    e.preventDefault();
    
    const data = {
      name,
      company,
      phoneNumber,
      email,
      subject,
      message
    }

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (res.status === 200) {
      console.log('Response succeeded!')
      setSubmitted(true)
      setName('');
      setCompany('');
      setPhoneNumber('');
      setSubject('');
      setEmail('')
      setMessage('')
    }

  }

  if(submitted){
    return (
      <div className='pr-24 text-lg'>Your Inquiry has been submitted. We'll try to get back to you shortly. Thanks!</div>
    )
  } else {
    return (
      <div className="grid grid-cols-2 gap-x-24 gap-y-16">
        <label className="block">
          <span className="text-lg text-gray-300">Name</span>
          <input
            type="text"
            className="
                      mt-0
                      block
                      w-full
                      px-0.5
                      text-white
                      bg-transparent
                      border-0 border-b-2 border-gray-400
                      focus:ring-0 focus:border-white
                    "
            onChange={(e)=>{setName(e.target.value)}}
            value={name}
          />
        </label>
        <label className="block">
          <span className="text-lg text-gray-300">Company</span>
          <input
            type="text"
            className="
                      mt-0
                      block
                      w-full
                      px-0.5
                      text-white
                      bg-transparent
                      border-0 border-b-2 border-gray-400
                      focus:ring-0 focus:border-white
                    "
            onChange={(e)=>{setCompany(e.target.value)}}
            value={company}
          />
        </label>
        <label className="block">
          <span className="text-lg text-gray-300">Email</span>
          <input
            type="text"
            className="
                      mt-0
                      block
                      w-full
                      px-0.5
                      text-white
                      bg-transparent
                      border-0 border-b-2 border-gray-400
                      focus:ring-0 focus:border-white
                    "
            onChange={(e)=>{setEmail(e.target.value)}}
            value={email}
          />
        </label>
        <label className="block">
          <span className="text-lg text-gray-300">Phone Number</span>
          <input
            type="text"
            className="
                      mt-0
                      block
                      w-full
                      px-0.5
                      text-white
                      bg-transparent
                      border-0 border-b-2 border-gray-400
                      focus:ring-0 focus:border-white
                    "
            onChange={(e)=>{setPhoneNumber(e.target.value)}}
            value={phoneNumber}
          />
        </label>

        <label className="block">
          <span className="text-lg text-gray-300">Subject</span>
          <input
            type="text"
            className="
                      mt-0
                      block
                      w-full
                      px-0.5
                      text-white
                      bg-transparent
                      border-0 border-b-2 border-gray-400
                      focus:ring-0 focus:border-white
                    "
            onChange={(e)=>{setSubject(e.target.value)}}
            value={subject}
          />
        </label>

        <label className="block col-span-2">
          <span className="text-lg text-gray-300">Message</span>
          <textarea
            className="block w-full mt-1 text-white bg-transparent border-gray-400 rounded-md shadow-sm focus:border-white focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            rows="3"
            onChange={(e)=>{setMessage(e.target.value)}}
            value={message}
          ></textarea>
        </label>

        <input type='submit' className='py-3 text-base border rounded-xl hover:bg-blue-500 hover:bg-opacity-50 hover:cursor-pointer' onClick={(e)=>{handleSubmit(e)}} />
      </div>
    )
  }
}
