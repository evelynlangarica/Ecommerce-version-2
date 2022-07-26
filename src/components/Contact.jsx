import styled from "styled-components"
import React from 'react'
import Navbar from "./Navbar"
import Announcement from "./Announcement"


import Footer from "./Footer"
import { mobile } from "../responsive"



const Container = styled.div`
    flex: 1;
    margin: 5px;
    height: 80vh;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    text-align: center;
    background-color: #d3bfa8;
    margin-bottom: 60px;
    ${mobile({ width: "100%" })}

`
const Label = styled.div`
width: 30%;
font-size: 30px;


`
const Input = styled.input`
    width: 80%;
    font-size: 20px;
    height: 80%;
    
    
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
const Form = styled.div`
width:100%;
height: 100%;


`
const AboutContainer=styled.div`

width:80%;
height: 67%;
display: inline-block;
margin-top:10px;
`

const Contact = ({item}) => {
    return (
      <Container>
          
        <Announcement/>
        <Navbar/>
        <Title>Send us a message!</Title>
        <AboutContainer>
        <Form >
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
        <Input type="message" placeholder="Your message" name="message" required />
      </div>
      <div>
        <Button type="submit"> Submit </Button>
      </div>
    </Form>
   
   
    </AboutContainer>
    <Footer/>
      </Container>

      
    )
  }
  
  export default Contact

