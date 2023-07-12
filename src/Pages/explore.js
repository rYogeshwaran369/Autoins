import React from 'react'
import Policycard from '../Components/policycard'

export default function Explore() {
  return (
    <div style={{width:'100vw',height:'74vh',display:'flex',backgroundColor:'whitesmoke',flexDirection:'column'}}>
    
    <div style={{ overflowX: 'scroll', height: 'calc(100vh - 3em)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginLeft: '3em', marginRight: '3em', marginTop: '3em',marginBottom:'1em' }}>
     
     <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginLeft:'3em',marginRight:'3em',marginTop:'3em',borderWidth:'2px',borderColor:'red'}}>
      <Policycard/>
      <Policycard/>
      <Policycard/>
      </div>
    
     <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginLeft:'3em',marginRight:'3em',marginTop:'3em',marginBottom:'2em'}}>
      <Policycard/>
      <Policycard/>
      <Policycard/>
      </div>
      </div>
      </div>
  )
}
