import React from 'react'
import { useParams } from 'react-router-dom'
import AboutPlanet from './AboutPlanet';
import Header from './Header';


export default function Planet({ planets, colors }) {
  let { planet } = useParams();
  const currentPlanet = planets.find(p => p.name === planet);
  const currentPlanetIndex = planets.findIndex(p => p.name === planet);
  return (
    <>
      <Header planets={planets} currentPlanet={planet} colors={colors} />
      <AboutPlanet currentPlanet={currentPlanet} color={colors[currentPlanetIndex]} />
    </>
  )
}
