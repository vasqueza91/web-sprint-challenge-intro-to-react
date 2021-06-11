// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components'
// import axios from 'axios'


// const StyledButton = styled.button`
//   display: inline-block;
//   border-radius: 3px;
//   padding: 0.5rem 0;
//   margin: 0.5rem 1rem;
//   width: 11rem;
//   background: transparent;
//   color: black;
//   border: 2px solid white;
// `

    

// export default function Films() {
//     const [movies, setMovies] = useState([])
//     const [currentId, setCurrentCharId] = useState(null)

// const openDetails = id => {
//   setCurrentCharId(id)
// }
// const closeDetails = () => {
//   setCurrentCharId(null)
// }

//     useEffect(() => {
//       axios.get('https://swapi.dev/api/films')
//       .then((res)=>{
//         // console.log(res.data.results)
//         setMovies(res.data.results)
//       })
//       .catch(err => {
//         console.log(err)
//       })

//     },[])
//     return(
//         <div className='container'>
          
//         </div>
//     )
// }