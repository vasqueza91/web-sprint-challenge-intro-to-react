import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import axios from 'axios'


const StyledButton = styled.button`
display:inline;
color:black;
padding:5px;
border-radius: 10px 20px;
`

    

export default function Films({ info, action }) {
    const [movies, setMovies] = useState([])
    useEffect(() => {
      axios.get('https://swapi.dev/api/films')
      .then((res)=>{
        setMovies(res.movies)
      })
      .catch()
    },[])
    return(
        <StyledButton onClick={() => action(info.films)}>
            Films
        </StyledButton>
    )
}