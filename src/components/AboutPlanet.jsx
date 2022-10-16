import React, { useState } from 'react'
import styled from 'styled-components';
import sourceImage from '../assets/icon-source.svg';

export default function AboutPlanet({ currentPlanet, color }) {
  const { name, rotation, revolution, radius, temperature } = currentPlanet;
  const { planet, internal, geology } = currentPlanet.images;
  const [info, setInfo] = useState('overview');
  const infoItems = ['overview', 'structure', 'geology'];

  return (
    <>
      <InfoItems>
        {infoItems.map(item => {
          return <InfoItem color={color} onClick={() => setInfo(item)} key={item} isChosen={info === item}>{item}</InfoItem>
        })}
      </InfoItems>
      <AboutPlanetContainer>
        <ImageAndDescription>
          <PlanetImage>
            <img src={info !== 'structure' ? process.env.PUBLIC_URL + planet : process.env.PUBLIC_URL + internal} alt={name} />
            {info === 'geology' && <GeologyImage src={process.env.PUBLIC_URL + geology} alt='geology' />}
          </PlanetImage>
          <Details>
            <Description>
              <h2>{name}</h2>
              <p>{currentPlanet[info].content}</p>
              <Source>
                <span>Source : </span>
                <a href={currentPlanet[info].source} target='_blank' rel='noreferrer'>
                  <span>Wikipedia</span>
                  <img src={sourceImage} alt='source' />
                </a>
              </Source>
            </Description>
            <InfoItemsDesktop>
              {infoItems.map((item, index) => {
                return <InfoItemDesktop color={color} onClick={() => setInfo(item)} key={item} isChosen={info === item}><span>0{index + 1}</span> <span>{item}</span></InfoItemDesktop>
              })}
            </InfoItemsDesktop>
          </Details>
        </ImageAndDescription>
        <Stats>
          <Stat>
            <span>Rotation Time</span>
            <span>{rotation}</span>
          </Stat>
          <Stat>
            <span>Revolution Time</span>
            <span>{revolution}</span>
          </Stat>
          <Stat>
            <span>Radius</span>
            <span>{radius}</span>
          </Stat>
          <Stat>
            <span>Average temp.</span>
            <span>{temperature}</span>
          </Stat>
        </Stats>
      </AboutPlanetContainer>
    </>
  )
}
const AboutPlanetContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 24px;

  @media screen and (min-width: 768px) {
    padding: 0 40px;
  }
`

const InfoItems = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  @media screen and (min-width: 768px) {
    display: none;
  }
`

const InfoItem = styled.li`
  font-weight: 700;
  font-size: 9px;
  line-height: 10px;
  letter-spacing: 1.9px;
  text-transform: uppercase;
  list-style: none;
  cursor: pointer;
  position: relative;
  color: ${props => props.isChosen ? '#FFFFFF' : 'rgba(255, 255, 255, 0.5)'};
  transition: all 0.3s ease-in-out;
  padding: 20px 0;

  &::after {
    content: '';
    position: absolute;
    bottom: 0px;
    left: 0;
    width: ${props => props.isChosen ? '100%' : '0'};
    height: 4px;
    background: ${props => props.color};
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    color: #FFF;

    &::after {
      width: 100%;
    }
  }
`;

const ImageAndDescription = styled.div`

  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    align-items: center;
    justify-content: center;
    gap: 300px;
    margin: 126px 0 87px;
  }
`;

const PlanetImage = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 95px;
  min-width: 150px;
  width: 30%;

  img:first-child {
    width: 100%;
  }

  @media screen and (min-width: 1024px) {
    width: 100%;
  }
`;

const GeologyImage = styled.img`
  position: absolute;
  bottom: 5%;
  left: 50%;
  width: 40%;
  transform: translateX(-50%);
`;

const Details = styled.div`

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 60px;
    margin: 95px 0 27px;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
    margin: 0;
  }
`;

const Description = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  margin: 100px 0 25px;

  h2 {
    font-family: 'Antonio';
    font-weight: 400;
    font-size: 40px;
    line-height: 52px;
    text-transform: uppercase;
  }

  p {
    font-size: 11px;
    line-height: 22px;  
    opacity: .75;
    margin: 16px 0 32px;
  }

  @media screen and (min-width: 768px) {
    text-align: left ; 
    align-items: flex-start;
    width: 60%;
    margin: 0;

    h2 {
      font-size: 48px;
      line-height: 62px;
    }

    p {
      margin-top: 24px;
    }
  }
`

const Source = styled.div`  
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 12px;
  line-height: 25px;
  gap: 4px;
  opacity: 0.5;

  a {
    color: #FFF;
    transition: all 0.3s ease-in-out;
    display: flex;
    font-weight: 700;
    align-items: center;
    gap: 4px;


    &:hover {
      opacity: 0.8;
    }
  }

`;

const InfoItemsDesktop = styled(InfoItems)`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 40%;
    border: none;
    gap: 24px;
  }

  @media screen and (min-width: 1024px) {
    width: 60%;
  }
`

const InfoItemDesktop = styled(InfoItem)`
  @media screen and (min-width: 768px) {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 16px;
    background-color: ${props => props.isChosen ? props.color : 'transparent'};
    padding: 8px 20px;
    font-weight: 700;
    font-size: 12px;
    line-height: 25px;
    letter-spacing: 2.5px;
    color:#FFF;
    border: 1px solid ${props => props.isChosen ? props.color : 'rgba(255, 255, 255, 0.5)'};

    span:first-child {
      font-weight: 700;
      opacity: .75;
    }

    &::after {
      display: none;
    }

    &:hover {
      ${props => props.isChosen ? ''
    : 'background-color: rgba(216, 216, 216, 0.2); border-color: rgba(216, 216, 216, 0.2);'};
        
        
    }
  }
`;

const Stats = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  margin-bottom: 60px;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (min-width: 1024px) {
    gap: 30px;
  }
`;

const Stat = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 24px;
  border: 1px solid rgba(255, 255, 255, 0.2);

  span:first-child {
    font-weight: 700;
    font-size: 8px;
    line-height: 16px;
    letter-spacing: 0.7px;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.5);
  }

  span:last-child {
    font-family: 'Antonio';
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;
    letter-spacing: -0.75px;
    text-transform: uppercase;
  }

  @media screen and (min-width: 768px) {
    padding: 16px;
    padding-bottom: 20px;
    flex-direction: column;
    gap: 6px;
    align-items: flex-start;

    span:last-child {
      font-size: 24px;
      line-height: 31px;
      letter-spacing: -0.9px;
    }
  }

  @media screen and (min-width: 1024px) {
    padding: 24px;
    padding-bottom: 28px;

    span:first-child {
      font-size: 11px;
      line-height: 25px;
      letter-spacing: 1px;
    }

    span:last-child {
      font-size: 40px;
      line-height: 52px;
      letter-spacing: -1.5px;
    }
  }
`;