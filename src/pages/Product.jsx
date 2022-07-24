import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import { mobile } from '../responsive'


const Container = styled.div``


const Wrapper = styled.div`
    padding: 50px;
    display:flex;
    ${mobile({padding: "10px" , flexDirection:"column"})}
`

const ImgContainer = styled.div`
    flex:1;
`
const Image = styled.img`
    width:100%;
    height: 90vh;
    object-fit:cover;
    ${mobile({height: "40vh"})}
   
`
const InfoContainer = styled.div`
    flex:1;
    padding: 0px 50px;
    ${mobile({padding: "10px"})}

`
const Title = styled.h1`
    font-weight: 200;

`
const Desc = styled.p`
    margin: 30px 0px;
`
const Price = styled.span`
    font-weight: 100;
    font-size:40px;
`

const FilterContainer= styled.div`
width: 50%;
margin: 30px 0px;
display: flex; 
justify-content: space-between;
${mobile({width: "100%"})}
`
const Filter= styled.div`
    display: flex;
    align-items: center;

`
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`
const FilterOption= styled.option`
width: 20px;
height: 20px;
border-radius: 50%;
margin: 0px 5px;
cursor: pointer;
`
const FilterQuantity= styled.select`
    margin-left: 10px;
    padding: 5px;
`
const AddContainer= styled.div`
    width: 50%;
    display: flex;
    align-items: center; 
    justify-content: space-between;
    ${mobile({width: "100%"})}

`

const AmountContainer= styled.div`
    display: flex; 
    align-items: center;
    font-weight: 700; 
`
const Amount = styled.span`
    width : 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal; 
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`
const Button = styled.button`
    padding: 15px;
    border: 3px solid teal;
    background-color:white;
    cursor: pointer;
    font-weight: 500; 
    &:hover{
        background-color: #f8f4f4;
    }
`


export const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImgContainer>
            <Image src="https://images-na.ssl-images-amazon.com/images/I/51eQ6HKxqNL._SX328_BO1,204,203,200_.jpg" />

            </ImgContainer>
            <InfoContainer>
                <Title>Atomic Habits </Title>
                <Desc>
No matter your goals, Atomic Habits offers a proven framework for improving--every day. James Clear, one of the world's leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.</Desc>
                <Price>$20</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Quantity</FilterTitle>
                        <FilterQuantity>
                            <FilterOption>1</FilterOption>
                            <FilterOption>2</FilterOption>
                            <FilterOption>3</FilterOption>
                            <FilterOption>4</FilterOption>
                            <FilterOption>5</FilterOption>
                        </FilterQuantity>
                    </Filter>

                   
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove/>
                        <Amount>1</Amount>
                        <Add/>
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>

            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product