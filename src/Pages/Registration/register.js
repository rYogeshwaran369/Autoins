import React, { useState } from 'react';
import { Link} from 'react-router-dom';


export default function Register() {

    const [username,setUsername] = useState('');
    const [Vehno,setVehno] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [addr,setAddr] = useState('');
    const [files,setFiles] = useState('');

    const [alname,setAlname] = useState('');
    const [alveh,setalveh] = useState('');
    const [alemail,setalemail] = useState('');
    const [alphone,setalphone] = useState('');
    const [aladdr,setAladdr] = useState('');
    const [alfiles,setalfiles] = useState('');

    const handleValidation = () => {
      if(!files)
      {
        setalfiles("please choose the file")
      }
      else
      {
        setalfiles('')
      }
      if(!addr)
      {
        setAladdr('Please enter the Address')
      }
      else
      {
        setAladdr('')
      }
        if (!username) {
            setAlname('Please Enter the User Name!')
        }
        else{
            setAlname('')
        }
        if (!Vehno) {
            setalveh('Please Enter the Vehicle Number!')
        }
        else
        {
            setalveh('')
        }
       if (!email) {
          setalemail('Please Enter the Email Id!')
        }
      else
      {
          setalemail('')
      }
      if (!phone) {
        setalphone('Please Enter the Phone Number!')
      }
    else
    {
        setalphone('')
    }
      if(Vehno && username && email && phone)
        {
            alert("Registration Sucessfull")
            setUsername('');
            setEmail('')
            setPhone('')
            setVehno('')
            setAddr('')
        }
       
      };
  

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', flexDirection: 'column', width: '100vw', height: '100%', alignItems: 'center', backgroundColor: '#1e2125' }}>
        
        <div style={{ justifyContent: 'space-between', display: 'flex', flexDirection: 'row', width: '100%', marginTop: '2em',height:'100%' ,marginBottom:'3em'}}>
          <img style={{ width: '5em', marginLeft: '2em' ,height:'5em'}} src='https://cdn-icons-png.flaticon.com/512/2209/2209673.png' alt='Logo' />
        <h1 style={{ color: '#e9dfce', fontStyle: 'italic', fontSize: '3em' }}>Registration Page</h1>
          <span style={{ color: '#e9dfce', textDecoration: 'underline', fontStyle: 'italic', marginLeft: '2em', marginRight: '2em', fontSize: '2em' }}>AIP</span>
        </div>


        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%', }}>
          <div style={{display:'flex',flexDirection:'column',height:'100%'}}>
            <input value={username}
            onChange={(e) => setUsername(e.target.value)} placeholder='Enter User Name' style={{ fontStyle: 'italic', fontSize: '1em', width: '20em', padding: '0.7em', margin: '1em', borderRadius: 5 }} />
            <span style={{color:'red'}}>{alname}</span>
           
            <input value={Vehno} onChange={(e) =>setVehno(e.target.value) }  placeholder='Enter Vehicle No' style={{ width: '20em', fontSize: '1em', padding: '0.7em', margin: '1em' }} />
            <span style={{color:'red'}}>{alveh}</span>
            
            <input value={email} onChange={(e) =>setEmail(e.target.value) }
              placeholder='Enter Email Id'
              style={{ width: '20em', fontSize: '1em', padding: '0.7em', margin: '1em' }}
            />

          <span style={{color:'red'}}>{alemail}</span>

            <input value={phone} onChange={(e) =>setPhone(e.target.value) }
             placeholder='Enter Phone Number' style={{ width: '20em', fontSize: '1em', padding: '0.7em', margin: '1em' }}/>
            <span style={{color:'red'}}>{alphone}</span>

            <textarea value={addr} onChange={(e) =>setAddr(e.target.value) }
             placeholder='Enter Address' style={{ width: '25em', fontSize: '1em', padding: '0.7em', margin: '1em',height:'4em' }}/>
            <span style={{color:'red'}}>{aladdr}</span>

            <select style={{ width: '21.3em', fontSize: '1em', padding: '0.7em', margin: '1em' }}>
              <option>Select the Model</option>
              <option>Two Wheeler</option>
              <option>Four Wheeler</option>
            </select>
            <label style={{color:'white',marginLeft:'1em'}}>License Proof</label>
            <input type='file'  placeholder='License' style={{color:'white', width: '30em', fontSize: '1em', padding: '0.7em', margin: '1em',height:'4em' }}/>
            {/* <span style={{color:'red'}}>{alfiles}</span> */}

          </div>
          </div>

         <button onClick={handleValidation} type='submit' style={{ width: '15em', padding: '0.6em', backgroundColor: '#e9dfce', borderRadius: 10, fontStyle: 'italic', fontSize: '1em', marginTop: '2em' }}>Register</button>
       
        <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '5em', marginTop: '0.6em' }}>
          <span style={{ color: 'gray' }}>Already have an Account? </span>
          <Link to='/' ><span style={{ color: '#e9dfce', marginLeft: '1em' }}>Sign in</span></Link>
        </div>
      </div>
    </div>
  );
}
