import React from 'react'
import styled from "styled-components"

import {  Phone, MailOutline, Room } from '@material-ui/icons'
import { mobile } from '../responsive'
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./socialfollow.css";

const Container= styled.div`
    display:flex;
    ${mobile({flexDirection:"column"})}
`
const Left= styled.div`
    flex: 1; 
    display: flex;
    flex-direction: column;
    padding:20px;
`
const Center= styled.div`
    flex:1;
    padding:20px;
    ${mobile({display:"none"})}
`
const Title=styled.h3`
    margin-bottom:30px;
`

const List = styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    display:flex;
    flex-wrap: wrap;
`


const ListItem= styled.li`
    width: 50%;
    margin-bottom: 10px;
`
const ContactItem=styled.div`
    margin-bottom:20px;
    display:flex;
    align-items:center;
`

const Right= styled.div`
    flex:1;
    padding:20px;
    

`
const Logo= styled.h1``;

const Desc = styled.p`
    margin: 20px 0px;
`;

const SocialContainer= styled.div`
    display:flex;
    margin-right:20px;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color:white;
    background-color: #${props=>props.color};
    display:flex;
    align-items:center;
    justify-content:center;
    margin-right:20px;
`;




const Footer = () => {
    return (
      <Container>
          <Left>
              <Logo> Book Worm</Logo>
              <Desc>
                  Latina Owned Business
              </Desc>
              <div class="social-container">
                  <a href="https://www.facebook.com/BadBunnyOfficial"
                  className="facebook social">
                       <FontAwesomeIcon icon={faFacebook} size="2x"  />
      </a>

      <a href="https://www.youtube.com/watch?v=kLpH1nSLJSs"
        className="youtube social">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a href="https://twitter.com/sanbenito/status/1547299280481837056" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://www.instagram.com/badbunny.pr/"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>


                 
                   
                      
                 
      </div>
          </Left>
          <Center>
              <Title>Useful Links</Title>
              <List>
                  <ListItem>Home </ListItem>
                  <ListItem>Cart</ListItem>
                  <ListItem>Wishlist</ListItem>
              </List>
          </Center>
          <Right>
              <Title>Contact</Title>
              <ContactItem><Room style={{marginRight:"10px"}}/>
              
                  2416 Piedmont Rd NE, Atlanta, GA 30324
              </ContactItem>
              <ContactItem><Phone style={{marginRight:"10px"}}/>(404)-678-7700</ContactItem>
              <ContactItem><MailOutline  style={{marginRight:"10px"}}/>atlwoe@bookworm.com</ContactItem>
          </Right>
      </Container>
    )
  }


export default Footer