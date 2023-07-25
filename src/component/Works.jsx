import React from 'react'
import { styled } from 'styled-components'

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
 
`

const Container = styled.div`
  width:1400px;
  display:flex;
  justify-content:space-between;
 
`

const Left = styled.div`
  flex:1;
  display:flex;
  align-items:center;
  justify-content:center;

`

const List = styled.ul`
  list-style:none;
  display:flex;
  flex-direction:column;
  gap:20px;
`

const ListItem = styled.li`
  font-size:100px;
  font-weight:bold;
  cursor:pointer;
  color:transparent;
  -webkit-text-stroke:1px white;
  position:relative;

  ::after{
    content:asdads ;

  
  }

`

const Right = styled.div`
  flex:1;

 
`



const Works = () => {
  return (
    <Section>
      <Container>
        <Left>
          <List>
            {
              data.map((item,index)=>(
                <ListItem key={index} text={item} >
                  {item} 
                </ListItem>
              ))
            }
          </List>

        </Left>

        <Right>

        </Right>
      </Container>
    </Section>
  )
}

export default Works
