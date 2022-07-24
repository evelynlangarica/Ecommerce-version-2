import React from 'react'

import styled from "styled-components"

const Container = styled.div`
height: 40px;
background-color: #AE8165;
color:white;
display:flex;
align-items: center;
justify-content:center;
font-size:17px;

font-weight:500;`

 const Announcement = () => {
  return (
    <Container>
        Super Deal! Buy One Get One 50% Off!
    </Container>
  )
}

export default Announcement