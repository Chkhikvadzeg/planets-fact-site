import Header from './Header'

export default function Home({ planets }) {

  return (
    <>
      <Header currentPlanet='Mercury' planets={planets} />
    </>
  )
}
