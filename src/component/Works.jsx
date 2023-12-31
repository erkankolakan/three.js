import React, { useState } from 'react'
import { styled } from 'styled-components'
import WebDesing from './WebDesing'
import Development from './Development'
import ProductDesing from './ProductDesing'
import CatAnimation from './CatAnimation'
import SocialMedia from './SocialMedia'

const data =[
  "Web Desing",
  "Development",
  "Illustration",
  "Product",
  "Social Media",
]


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display:flex;
  justify-content:center;
  position:relative;
  font-size:14px;
  font-weight:300;

 
`

const Container = styled.div`
  width:1400px;
  display:flex;
  justify-content:space-between;
  
  @media only screen and (max-width:768px){
    flex-direction:column;
    width:100%;
  
    }
 
`

const Left = styled.div`
  flex:1;
  display:flex;
  align-items:center;
  justify-content:center;

  @media only screen and (max-width:768px){
    padding:20px;
  
    }

`

const List = styled.ul`
  list-style:none;
  display:flex;
  flex-direction:column;
  gap:20px;
`

const ListItem = styled.li`
  font-size:90px;
  font-weight:bold;
  cursor:pointer;
  color:transparent;
  -webkit-text-stroke:1px white;
  position:relative;

  @media only screen and (max-width:768px){
      color:white;
      font-size:24px;
      -webkit-text-stroke:0px;

    }

  &::after{
    content:" ${(props => props.text)} " ;
    position:absolute;
    top:0;
    left:0;   
    color:pink;
    width:0px;
    overflow:hidden;
    white-space:nowrap;
  }

  &:hover{
    &::after{
      animation: moveText .5s linear both;

      @keyframes moveText{
        to{
          width:100%;
        }
      }
    }
  }

`;

const Right = styled.div`
  flex:1;
`



const Works = () => {

  const [work,setWork] = useState("Web Desing")
  



  return (
    <Section>
      
      <Container>
        <Left>

          <List>
            {
              data.map((item,index)=>(
                <ListItem key={index} text={item} onClick={() => setWork(item)} >
                  {item} 
                </ListItem>
              ))
            }
          </List>

        </Left>
        <Right>
          {
            work === "Web Desing" ? (<WebDesing/>) :
            work === "Development" ? (<Development/>):
            work === "Product" ? (<CatAnimation/>):
            work === "Social Media" ? (<SocialMedia/>):
            (<ProductDesing/>)
          }
        </Right>
      </Container>
    </Section>
  )
}

export default Works
