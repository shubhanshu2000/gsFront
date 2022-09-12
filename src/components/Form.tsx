import { useEffect, useState } from "react";
import illustration from "../assets/illustration.png"

const  Form = () => {
  const [email, setEmail] = useState("")
  const [fName, setFName] = useState("")
  const [lName, setLName] = useState("")
  const [address, setAddress] = useState("")

 const sendData = async (e:any) => {
    e.preventDefault();
    const options = {
      method: "POST",
      headers: {
				'Content-Type': 'application/json',
			},
      body: JSON.stringify({ email,fName,lName, address })
    }
  await  fetch("http://localhost:3000/",options).then(res=>res.json()).then(data=>console.log(data)).catch(err=>console.log(err))

  }


 
  return (
    <>
      <div>
        <section className="h-[78vh] w-[55vw] shadow-2xl flex">
        <div style={{backgroundImage: `url(${illustration})`}} className=" bg-no-repeat bg-center bg-contain flex flex-col justify-between py-6  px-20 bg-white text-center w-3/5">
          <h4 className="text-xl">Get Everything You Need For Creating A Wordpress Website</h4>
          <p className="text-sm text-[#c4c8d0]">All-in-One Multifunctional Subscribe Service Perfect for Launching All Kinds of WordPress Projects!</p>
        </div>
        <div className="w-2/5 flex flex-col  items-center bg-[#272e3f]  ">
          <div className="flex w-4/5 flex-col py-4 justify-evenly  items-center h-full">
              <h2 className="text-[#00edc4]  text-xl ">SUBSCRIBE AND GET YOUR BONUS!</h2>
        <form className="flex  flex-col   w-full justify-center  items-center">
          <input type="text" value={email}  onChange={e=> setEmail(e.target.value)} className="bg-[#484d5c] outline-none p-2 rounded-[0.238rem] w-full" placeholder="E-mail Address" />
          <input type="text" value={fName} onChange={e=>setFName(e.target.value)} className="bg-[#484d5c] my-4 w-full outline-none p-2 rounded-[0.238rem]" placeholder="First name" />
          <input type="text" placeholder="Last name" value={lName} onChange={e=> setLName(e.target.value)} className="w-full outline-none bg-[#484d5c] p-2 rounded-[0.238rem]"/>
          <input type="text" placeholder="Address" value={address} onChange={e=> setAddress(e.target.value)} className="my-4 w-full p-2 rounded-[0.238rem] outline-none bg-[#484d5c]"/>
          <input type="submit" onClick={sendData} value="STAY UPDATED" className="p-2 rounded-[0.238rem] bg-[#00ddb6] w-full cursor-pointer text-white" />
        </form>
        <p className="  text-[#8f96a3]">Your information will never be shared with any third party</p>
            </div>        
        </div>
        </section>
      </div>
    </>
  )
}


export default Form;