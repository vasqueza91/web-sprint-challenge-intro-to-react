// Write your Character component here
import React from 'react';
import styled from 'styled-components'
// import Films from './Films'

const StyledDiv = styled.div`
    color:red;
    display:block;
    text-align: left;
    width: 60%;
    margin-left:20%;
    display:flex;
    justify-content:space-between;
    align-items: center;
    border:3px solid black;
    padding:0px 20px;
    background-color: rgba(0,200,0,0.2);
`
const StyledH1 = styled.h1`
    display:inline;
`
const StyledH2 = styled.h2`
    display:inline;
    color:white;
    padding:5px;
    border-radius: 10px 20px;
`


const Character = props => {
    const { char } = props;

    

  return (
    <StyledDiv>
        <StyledH1>{char.name}</StyledH1>
        <StyledH2>Birth Year: {char.birth_year}</StyledH2>
        <StyledH2>Mass: {char.mass}</StyledH2>
        <StyledH2>Hair Color: {char.hair_color}</StyledH2>
        <StyledH2>Skin Color: {char.skin_color}</StyledH2>
        <StyledH2>Gender: {char.gender}</StyledH2>
        <StyledH2>Films: {char.films}</StyledH2>
    </StyledDiv>
  );
}
export default Character; 