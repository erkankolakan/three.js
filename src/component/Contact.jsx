import React from 'react'
import { styled } from 'styled-components'




const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`

const Container = styled.div`
  width:100%;
  height:100%;
  display: flex;
  justify-content: space-between;
`

const Left = styled.div`
  flex:1;
  display:flex;
  justify-content:center;
  align-items:flex-end;
  flex-direction:column;
`
const Title = styled.h1`
  font-size:35px;
  font-weight:100;
  width:500px

`
const Form = styled.form`
  width:500px;
  display:flex;
  flex-direction:column;
  gap:25px
`
const Input = styled.input`
  padding:20px;
  width:500px;
  border-radius:5px;
  outline:none;
  color:black;
`
const TextArea = styled.textarea`
  padding:20px;
  width:500px;
  height:300px;
  border-radius:5px;
  outline:none;
  color:black;
`
const Button = styled.button`
  background-color: #da4ea2;
  width:500px;
  border-radius:5px;
  padding:15px;
  color:white;
  font-weight:500;
  border:none;
  cursor:pointer;
  font-size:20px
`


const Right = styled.div`
  flex:1;

`




const Contact = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Form>
            <Title>Contact Us</Title>
            <Input placeholder='Name' />
            <Input placeholder='Email'/>
            <TextArea placeholder='Write your message' />
            <Button>Send</Button>
          </Form>
        </Left>
        <Right>

        </Right>
      </Container>

    </Section>
  )
}

export default Contact
