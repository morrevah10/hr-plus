import React, { Component } from "react"
import { useLocation, Link } from "react-router-dom"
import { CharectersList } from "../cmps/CharectersList.jsx"

export default function EpisodePage(props) {

  const location = useLocation()
  const data = location.state.episode
  console.log("data",data)
  
  return (
    <>
      <section className="episode-page">
        <h1> {data.name}</h1>
        <h4>{data.air_date}</h4>
        <h4>{data.episode}</h4>
        <h2>list of charecters:</h2>
      </section>

      <section className="actions">
        <h2 className="back-to">
          <Link
            to={{
              pathname: "/",
            }}
          >
            <span>back to all episodes</span>
          </Link>
        </h2>
      </section>

      <div>
        <CharectersList character={data.characters} data={data} />
      </div>
    </>
  )
}
