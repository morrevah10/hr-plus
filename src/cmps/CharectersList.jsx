import React, { Component } from 'react'
import Axios from "axios"
import { useLocation } from "react-router-dom"
import {Card} from "./CharecterCard.jsx"
import { makeArray,matchObjectsByUrl } from "../services/utilService.js"
import { useState, useEffect } from "react"


export const CharectersList = (props) => {

 const characterUrls = props.character
 const data = props.data

  const CharectersNum = 826
  const CharectersArray = makeArray(CharectersNum)
  const AllCharectersUrl = `https://rickandmortyapi.com/api/character/${[CharectersArray]}`
  
  const [charecters,setCharecters] = useState([])

 useEffect(() => {
    Axios.get(AllCharectersUrl)
    .then((character)=> {
      setCharecters(character.data)
    })
  })

  const matchedObjects = matchObjectsByUrl(characterUrls,charecters,'url')

  
  return (
    <>
  <div className="list simple-cards-grid">
  {matchedObjects.map(obj => <Card key={obj.id} obj={obj} data={data}/>)}
  </div>
  </>
  )




  }
