import React from 'react'
import { styled } from 'styled-components';


const Section = styled.div`
    display:flex;
    justify-content:center;

    @media only screen and (max-width:768px){
        width:100%;
        padding:10px;
        
      }
    
    

`;


const Container = styled.div`
    width:1400px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:10px 0
    
    @media only screen and (max-width:768px ){
        width:100%;
      }
    `;

    

const Links = styled.div`
    display:flex;
    align-items:center;
    gap:50px;

`;
const Logo = styled.img`
    height:50px;
`;
const List = styled.ul`
    cursor:pointer;
    display:flex;
    gap:20px;
    list-style:none;
    
    @media only screen and (max-width:768px ){
        display:none;
        
      }

`;
const ListItem = styled.li`

`;
const Icons = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    gap:20px;
    cursor:pointer;
`;
const Icon = styled.img`
    height:20px
`;  
const Button = styled.button`
    width:100px;
    padding:10px;
    background-color:#da4ea2;
    color:white;
    border-radius:5px
`;






const Navbar = () => {
  return (
    <Section >
      <Container >
        <Links>
            <Logo src="./img/logo.png"/>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Studio</ListItem>
                <ListItem>Works</ListItem>
                <ListItem>Contact</ListItem>

            </List>
        </Links>
        <Icons>
            <Icon src="./img/search.png"/>
            <Button>Hire Now</Button>
        </Icons>
      </Container>
    </Section>
  )
}

export default Navbar
