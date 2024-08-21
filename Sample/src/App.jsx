import React, { useEffect, useRef } from 'react'
import axios from 'axios'
export default function App() {

const name=useRef('');
const mail=useRef('');
const mobile=useRef('');
const city=useRef('');

  function submit(){
    const data={
      name:name.current.value,
      mail:mail.current.value,
      mobile:mobile.current.value,
      city:city.current.value,
    }
    
axios.post('http://localhost:1551/employee',data).then((response)=>{
  console.log(response.data)
 });
  }
 
  return (
    <>
    <form>
<div>
<label>Name:</label>
<input type='text' name='name' ref={name} placeholder='Enter Your Name'/>
</div>
<div>
<label>Mobile:</label>
<input type='text' name='mobile' ref={mobile} placeholder='Enter Your Mobile'/>
</div>
<div>
<label>Mail:</label>
<input type='text' name='mail' ref={mail} placeholder='Enter Your Mail'/>
</div>
<div>
<label>City:</label>
<input type='text' name='city' ref={city} placeholder='Enter Your City'/>
</div>
<button onClick={submit} type='button'>Submit</button>
    </form>
    </>
  )
}
