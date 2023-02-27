import React, { Component } from 'react'
import { extractNumbersFromUrls } from "../services/utilService.js"
import { useLocation,Link } from "react-router-dom"




export default function ChracterPage(props) {
  const location = useLocation()
  const Charecter = location.state.CharecterObj

  const episode = location.state.data
  
  const ShowsUrl =Charecter.episode
  const ShowNum = extractNumbersFromUrls(ShowsUrl)
  console.log("ShowNum",ShowNum)



  return (
    <>
    <section className='card'>
      <h3>Name : {Charecter.name}</h3>
      <h3>Status : {Charecter.status}</h3>
      <h3>Spicies : {Charecter.species}</h3>
      <h3>Gender : {Charecter.gender}</h3>
      <h3>Origin : {Charecter.origin.name}</h3>
      <h3>Location : {Charecter.location.name}</h3>
      <div className='num-episodes'>
      <h3>Total Episodes : {ShowNum}</h3>
      </div>
      <img className="card-img" src={Charecter.image}/>
      <h3 className="back-to" >
          <Link 
          to={{
            pathname : `/episode/${episode.id}`,
                state :{episode}
              }}>
          
          <span>back to all charecters</span>
          </Link>
          </h3>
    </section>
    </>
  )
}
