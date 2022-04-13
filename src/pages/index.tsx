import Head from 'next/head'
import React from 'react'
import pokeballIcon from '../assets/pokeball.png'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <img src={pokeballIcon} alt="Pokeball" />
        <title>Pokenext</title>
      </Head>

      <main>
        <h1>Pokenext</h1>
      </main>
    </div>
  )
}

export default Home
