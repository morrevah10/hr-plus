import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class EpisodeCard extends Component {

  render() {
    const {episode} = this.props
    return (
      <div className='episode-card'>
        <section className='info '>
            <h2>
              <Link className='linkToEpisodePage' 
              to={{
                pathname : `/episode/${episode.id}`,
                state :{episode}
              }}
              >
              {episode.name}
              </Link>
              </h2>
            <h3>{episode.air_date}</h3>
            <h4>{episode.episode}</h4>
        </section>
      </div>
    )
  }
}


