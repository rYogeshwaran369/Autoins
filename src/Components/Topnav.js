import React from 'react'
import { Link } from 'react-router-dom'

export default function Topnav() {
  return (
    <div>
    <div style={{width:'80%',paddingBottom:'2em',marginLeft:'5em',display:'flex',flexDirection:'column'}}>
                <div style={{display:'flex',flexDirection:'column'}}>
                    <div style={{display:'flex',flexDirection:'row'}}> 
                    <h1 style={{color:'red'}}>Automobile Insurence </h1>
                    <h1 style={{marginLeft:'0.3em'}}> Portal</h1>
                    </div>
                    <span style={{textAlign:'start',marginTop:'-1em'}}>Making You Feel Safe</span>
                </div>
            </div>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',paddingLeft:'2em',paddingRight:'2em'}}>
            <Link to='/home' style={{textDecoration:'none',color:'black'}}><h3 style={{color:''}}>Home</h3></Link>
                <Link to='/explore' style={{textDecoration:'none',color:'black'}}><h3 style={{color:''}}>Explore Insurences</h3></Link>
                <Link to='/register' style={{textDecoration:'none',color:'black'}}><h3 style={{color:''}}>Register Policy</h3></Link>
                <Link to='/register' style={{textDecoration:'none',color:'black'}}><h3 style={{color:''}}>Renew Insurence</h3></Link>
                <Link to='/register' style={{textDecoration:'none',color:'black'}}><h3 style={{color:''}}>Claim Insurence</h3></Link>
            </div>
            <div style={{marginLeft:'5.3em',width:'85%',height:'0.16em',backgroundColor:'black'}}>

            </div>
            </div>
  )
}
