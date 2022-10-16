import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import ChevronIcon from '../assets/icon-chevron.svg'

const Header = ({ planets, currentPlanet, colors }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Wrapper>
      <StyledHeader>
        <StyledLink to='/'>
          <h1>THE PLANETS</h1>
        </StyledLink>
        <Svg onClick={() => setIsMenuOpen(prev => !prev)} xmlns="http://www.w3.org/2000/svg" width="24" height="17"><g fill={`${isMenuOpen ? 'rgba(255,255,255,0.5)' : '#FFFFFF'}`} fillRule="evenodd"><path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" /></g></Svg>
        <Menu isMenuOpen={isMenuOpen}>
          {planets.map((planet, index) => {
            return (
              <PlanetItem onClick={() => setIsMenuOpen(false)} isPlanet={currentPlanet === planet.name} color={colors[index]} to={`/${planet.name}`} key={planet.name}>
                <div>
                  <Circle color={colors[index]} />
                  <h3>{planet.name}</h3>
                </div>
                <img src={ChevronIcon} alt="chevron" />
              </PlanetItem>
            )
          })}
        </Menu>
      </StyledHeader >
    </Wrapper >
  );
}

const Wrapper = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  position: relative;
  max-width: 1440px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    padding: 32px 48px;
    flex-direction: column;
  }

  @media screen and (min-width: 1024px) {
    padding: 0 40px 0 32px;
    flex-direction: row;
    justify-content: space-between;
  }
  `;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;

  h1 {
    font-family: 'Antonio';
    font-size: 28px;
    line-height: 36px;
    letter-spacing: -1.05px;
    text-transform: uppercase;
    user-select: none;
    font-weight: 400;
    white-space: nowrap;
  }

  `

const Svg = styled.svg`
  cursor: pointer;
  fill: ${props => props.isMenuOpen ? '#fff' : 'rgba(255, 255, 255, 0.5)'};

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const Menu = styled.div`
  position: absolute;
  transition: transform 0.3s ease-in-out;
  top: 69px;
  left: 0;
  width: 100%;
  height: calc(100vh - 69px);
  background: #070724;
  z-index: 1;
  padding: 44px 24px 24px 24px;
  display: flex;
  flex-direction: column;
  transform: ${props => props.isMenuOpen ? 'translateX(0)' : 'translateX(-100%)'};
  
  @media screen and (min-width: 768px) {
    transform: translateX(0);
    position: static;
    transition: none;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    height: auto;
    padding: 0;
    margin-top: 40px;
  }

  @media screen and (min-width: 1024px) {
    justify-content: flex-end;
    gap: 33px;
    margin-top: 0;
  }

`

const PlanetItem = styled(Link)`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  text-decoration: none;
  color: ${props => !props.isPlanet ? '#fff' : 'rgba(255, 255, 255, 0.5)'};
  font-weight: 700;
  font-size: 15px;
  line-height: 25px;
  letter-spacing: 1.36364px;
  text-transform: uppercase;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: color 0.1s ease-in-out;

  &:hover {
    color: rgba(255, 255, 255, 0.5);
  }

  div {
    display: flex;
    align-items: center;
    gap: 25px;
  }
  
  @media screen and (min-width: 768px) {
    padding: 0;
    border: none;
    font-size: 11px;
    letter-spacing: 1px;

    img {
      display: none;
    }
  }

  @media screen and (min-width: 1024px) {
    color: ${props => props.isPlanet ? '#fff' : 'rgba(255, 255, 255, 0.5)'};
    position: relative;
    padding: 24px 0;

    &:after {
      content: '';
      position: absolute;
      top: 0px;
      left: 0;
      height: 4px;
      opacity: ${props => props.isPlanet ? '1' : '0'};
      width: ${props => props.isPlanet ? '100%' : '0'};
      background: ${props => props.color};
      transition: width 0.3s ease-in-out, opacity 0.1s ease-in-out;
    }

    &:hover {
      color: #fff;

      &:after {
        opacity: 1;
        width: 100%;
      }
    }
  }
`;

const Circle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${props => props.color};

  @media screen and (min-width: 768px) {
    display: none !important;
  }
`

export default Header;