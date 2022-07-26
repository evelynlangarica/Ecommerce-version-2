
import React from 'react'
import styled from "styled-components"
import { mobile } from "../responsive";


const Container = styled.div`
    height : 60vh;
    background-color: #d3bfa8;
    display:flex;
    align-items: center;
    justify-content:center;
    text-align: center;
    flex-direction: column;
    ${mobile({ width: "100%" })}
  
    
    
`

const Input = styled.input`
    width: 100%;
    font-size: 20px;
    
    
`
const Button = styled.button`
background-color: #B7410E;
cursor:pointer;
color: white;



`

const Title = styled.h1`
    color: black;
    margin-bottom: 60px; 
    font-size: 50px;
    
    
    
    
  
    
`
const Label = styled.div`
width: 50%;
font-size: 30px;


`

const Message = () => {
  return (
    <Container>
   

    <Title>Send us a message!</Title>
        <form
     
    >
      <div>
          <Label>Name</Label>
        <Input type="text" placeholder="Your name" name="name" required />
      </div>
      <div>
          <Label>Email</Label>
        <Input type="email" placeholder="Email" name="email" required />
      </div>
      <div>
          <Label>Message</Label>
        <textarea placeholder="Your message" name="message" required />
      </div>
      <div>
        <Button type="submit"> Submit </Button>
      </div>
    </form>

    </Container>
  )
}


export default Message
