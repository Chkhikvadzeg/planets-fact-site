import React from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header';


export default function Planet({ planets }) {
  let { planet } = useParams();
  return (
    <>
      <Header planets={planets} currentPlanet={planet} />
      <div>{planet}</div>
    </>
  )
}
