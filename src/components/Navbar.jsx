import React from 'react'
import styled from 'styled-components'
import { ShoppingCartOutlined} from "@material-ui/icons";
import{Badge} from "@material-ui/core"
import { mobile } from '../responsive';
import { Link } from "react-router-dom"; 




const Container = styled.div `
height: 60px;

${mobile({height: "70px"})}

`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display:flex;
    justify-content: space-between;
    align-items:center;
    ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
flex:1;
display: flex;
align-items:center;`







const Center = styled.div`
flex:1;
text-align: center; 

`;

const Logo = styled.h1`
    font-weight:bold;
    ${mobile({fontSize: "24px"})};
    
`


const Right= styled.div`
flex:1;
display:flex;
align-items:center;
justify-content: flex-end;
${mobile({flex : 2,justifyContent:"center"})}
`;


const MenuItem = styled.div`
    font-size:17px;
    cursor:pointer;
    margin-left: 25px;
    text-decoration: none; 
    color: black; 
    font-weight: 70px;
    ${mobile({fontSize:"12px", marginLeft:"10px"})}


`


const Navbar = () => {
  return (
      
      <Container>
          <Wrapper>
    <Left>
       
    
    </Left>
    <Center><Logo>Book Worm</Logo>
    
    </Center>
    <Right>

    <Link to="/" exact style={{ textDecoration: 'none' }} >
        <MenuItem>Home </MenuItem>
        </Link>


        <Link to="/productlist" style={{ textDecoration: 'none' }}>
        <MenuItem>Shop</MenuItem>

        </Link>

        <Link to= "/contact" style={{ textDecoration: 'none' }} >
            <MenuItem>Contact Us</MenuItem>
        </Link>

        <MenuItem>
       
        <Badge badgeContent={4} color="primary">
      <ShoppingCartOutlined/>
    </Badge>
         </MenuItem>


    </Right>
    </Wrapper>
    </Container>
  )
}

export default Navbar


