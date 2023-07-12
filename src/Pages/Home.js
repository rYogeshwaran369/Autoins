import React from 'react'

export default function Home() {
  return (
        <div style={{width:'100vw',height:'100%',display:'flex',backgroundColor:'whitesmoke',flexDirection:'column'}}>

            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:'100%',marginTop:'3em'}}>

                <div style={{width:'50%',marginLeft:'6em',justifyContent:'center',alignItems:'center'}}>
                   <div style={{width:'100%',justifyContent:'center',alignItems:'center',marginTop:'6em'}}>
                        <h1>Fast And Easy Insurence</h1>
                        <div style={{justifyContent:'center',alignItems:'center'}}>
                        <p style={{fontFamily:'monospace',fontSize:'1.7em',alignItems:'center',justifyContent:'center'}}>
                        Insurance is the safety net that allows us to navigate life's uncertainties with peace of mind and financial security  it's a promise of support and protection when we need it the most.
                        </p>
                        </div>
                   </div>
                </div>

                <div style={{width:'50%',justifyContent:'center',alignItems:'center',marginLeft:'3em'}}>
                <img src='https://res.cloudinary.com/dxhmtgtpg/image/upload/v1689051283/R-removebg-preview_fozrzp.png'/>
                </div>
            </div>

            <div style={{width:'100%',marginTop:'2em',justifyContent:'center',alignItems:'center',display:'flex'}}>
                <button style={{width:264,height:40,backgroundColor:'white',color:'black',fontSize:'1.2em'}}>Learn More</button>
            </div>
        </div>
  )
}
