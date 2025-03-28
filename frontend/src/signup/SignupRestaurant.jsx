import React, { useState } from 'react'



const SignupRestaurant = () => {
  const [restName, setRestName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [document, setDocument] = useState(null);
  const [owName, setOwName] = useState("");
  const [fssai, setFssai] = useState("")


  const handleSignup = async (e) => {

    // alert("Resturant Registered!");
  }
  return (
    <>

      <div className='bg-[#fede19] w-[100%] h-screen overflow-y-hidden'>


        <h1 className=' text-[#4e220a] text-2xl font-bold m-0 p-0'>FOODBRIDGE</h1>

        <div className=' bg-[#fede19] flex justify-center items-center h-[90%]'>

          <div className=' bg-white py-1 rounded-3xl w-[55%]'>

            <h2 className='text-2xl text-[#4e220a] font-semibold text- text-center mb-6 mt-0 pt-0 '>Restaurant Sign Up</h2>

            <form className='h- 
            flex flex-col gap-4 px-20 py-4' onSubmit={handleSignup}>

              <span className='flex flex-wrap gap-2'>
              
              <input className='p-3 border border-[#4e220a] rounded-full text-[#4e220a]' type="text" placeholder='Restaurant Name' value={restName} onChange={(e) => { setRestName(e.target.value) }} required/>
            
              <input className='p-3 border border-[#4e220a] rounded-full text-[#4e220a]' type="text" placeholder='Owner Name' value={owName} onChange={(e) => { setOwName(e.target.value) }} required/>

              <input className='p-3 border border-[#4e220a] rounded-full text-[#4e220a]' type="text" placeholder='Contact' value={contact} onChange={(e) => { setContact(e.target.value) }} required/>
              
              <input className='p-3 border border-[#4e220a] rounded-full text-[#4e220a]' type="text" placeholder='Email' value={email} onChange={(e) => { setEmail(e.target.value) }} required/>
                      
              <input className='p-3 border border-[#4e220a] rounded-full text-[#4e220a]' type="text" placeholder='Address' value={address} onChange={(e) => { setAddress(e.target.value) }} required/>

              
              <input className='p-3 border border-[#4e220a] rounded-full text-[#4e220a] ' type="text" placeholder='Password' value={password} onChange={(e) => { setPassword(e.target.value) }} required/>

              <input className='p-3 border border-[#4e220a] rounded-full text-[#4e220a] ' type="text" placeholder='FSSAI Number' value={fssai} onChange={(e) => { setFssai(e.target.value) }} required/>
          
              <input className='w-25 h-25 p-3 border border-[#4e220a] rounded-full text-[#4e220a]' type="file" accept=".pdf,docs,.docx,.jpg,.png" value={document} onChange={(e) => { setDocument(e.target.value) }} required/>
          
              </span>

              <button className='bg-[#4e220a] text-white py-4 rounded-full w-[50%] self-center' type='submit'>Sign Up</button>

            </form>
            
          </div>
          
        </div>
        <img src="/signup.svg" alt="" className='absolute bottom-4 left-2 w-20 h-15' />
      </div>
      
    </>
  )
}

export default SignupRestaurant
