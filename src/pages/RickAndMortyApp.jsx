import React, { Component } from "react"
import Axios from "axios"
import { makeArray } from "../services/utilService.js"
import { useState, useEffect } from "react"
import EpisodeCard from "../cmps/EpisodeCard.jsx"
import { connect } from "react-redux"
import hero1 from "../assets/imges/hero1.png"

export const RickAndMortyEpisodes = () => {
  const EpisodeNum = 51
  const EpisodeArray = makeArray(EpisodeNum)
  const AllEpisodeUrl = `https://rickandmortyapi.com/api/episode/${EpisodeArray}`

  const [episodes, setEpisodes] = useState([])

  useEffect(() => {
    Axios.get(AllEpisodeUrl).then((Episode) => {
      setEpisodes(Episode.data)
    })
  })

  // console.log("episodes", episodes)

  const [filteredArray, setFilteredArray] = useState(episodes)

  function handleFilterClick(value) {
    const fArray = episodes.filter((obj) => obj.episode.includes(value))
    setFilteredArray(fArray)
  }

  return (
    <div className="list ">
      <section className="actions">
        <div className="btn">
          <button onClick={() => handleFilterClick("S01")}>Season1</button>
          <button onClick={() => handleFilterClick("S02")}>Season2</button>
          <button onClick={() => handleFilterClick("S03")}>Season3</button>
          <button onClick={() => handleFilterClick("S04")}>Season4</button>
          <button onClick={() => handleFilterClick("S05")}>Season5</button>
        </div>
        <h2>Choose a season to continue the adventure !!</h2>
        <img className="hero" src={hero1} />
      </section>

      {filteredArray.map((episode) => (
        <EpisodeCard key={episode.id} episode={episode} />
      ))}
    </div>
  )
}
