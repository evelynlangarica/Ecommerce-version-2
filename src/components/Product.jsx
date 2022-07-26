
import React from 'react'
import styled from "styled-components"







const Info = styled.div`
opacity: 0;
    width: 100%;
    height:100%;
    position: absolute;
    top:0;
    left: 0; 
    background-color: rgba(0,0,0,0.2);
    z-index: 3; 
    display: flex;
    align-items: center;
    justify-content:center;
    transition: all 0.5s;
    cursor: pointer;




`

const Container = styled.div`
    flex: 1;
    margin:5px;
    min-width: 280px;
    height: 350px;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color: #e9dfd4;
    position: relative;
    &:hover ${Info}{
        opacity: 1;

    }
   
    
   
    

`;


const Image = styled.img`
    height: 60%;
     z-index: 2;
   
`


const Desc= styled.p`
    
    position:absolute;
    bottom:0;
    margin-bottom:25px;
`
const Price =styled.p`
position:absolute;
bottom:0;

`
const Button = styled.button`
    padding: 5px;
    font-size:20px;
    background-color: transparent;
    cursor: pointer;
    margin-bottom: 260px;
`;
 const Product = ({item}) => {
  return (
    <Container>
        
        <Image src= {item.img}/>
        <Info>
            {/* <Icon>
                <ShoppingCartOutlined/>
            </Icon>
            <Icon>
                <SearchOutlined/>
            </Icon>
            <Icon>
                <FavoriteBorderOutlined/>
            </Icon> */}
            <Button>Add to Cart</Button>
        </Info>
        
    <Desc>{item.desc}</Desc>
    <Price>{item.price}</Price>
    </Container>
    
  )
}

export default Product