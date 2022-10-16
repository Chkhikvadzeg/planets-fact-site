import React, { useState } from 'react'
import styled from 'styled-components';
import backgroundImg from '../assets/background-stars.svg';

export default function AboutPlanet({ currentPlanet, color }) {
  const { name, rotation, revolution, radius, temperature } = currentPlanet;
  const { planet, internal, geology } = currentPlanet.images;
  const [info, setInfo] = useState('overview');
  const infoItems = ['overview', 'structure', 'geology'];
  return (
    <Wrapper>
      <AboutPlanetContainer>
        <InfoItems>
          {infoItems.map(item => {
            return <InfoItem color={color} onClick={() => setInfo(item)} key={item} isChosen={info === item}>{item}</InfoItem>
          })}
        </InfoItems>
      </AboutPlanetContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const AboutPlanetContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 24px;
`

const InfoItems = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;

  
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
