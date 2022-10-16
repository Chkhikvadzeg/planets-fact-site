import Header from './Header'
import AboutPlanet from './AboutPlanet'

export default function Home({ planets, colors }) {
  const planet = planets[0];
  return (
    <>
      <Header currentPlanet='Mercury' planets={planets} colors={colors} />
      <AboutPlanet currentPlanet={planet} color={colors[0]} />
    </>
  )
}
