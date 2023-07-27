import React from 'react'
import { styled } from 'styled-components'
import Map from './Map'




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

  @media only screen and (max-width:768px){
    justify-content:center;
    

  }


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
  gap:25px;



  /*Burada kaldım */
  @media only screen and (max-width:768px){
    
    
    
    

  }


 
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

  @media only screen and (max-width:768px){
    display:none;

  }
 

`

const handleSubmit = (e) => {
  e.preventDefault(); //formun otomatik olarak sayfayı yenilemesini ve verileri sunucuya göndermesini engellemek için kullanılabilir. Bu şekilde, sayfayı yenilemeden JavaScript tarafından form verilerinin işlenmesi veya gönderilmesi mümkün olabilir.

  //"onSubmit" özelliği, bir HTML formu gönderildiğinde çalıştırılacak bir işlevi belirtmek için kullanılır.
}




const Contact = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Form onSubmit={handleSubmit}>
            <Title>Contact Us</Title>
            <Input placeholder='Name' />
            <Input placeholder='Email'/>
            <TextArea placeholder='Write your message' />
            <Button type="submit" >Send</Button>
          </Form>
        </Left>
        <Right>
          <Map/>
        </Right>
      </Container>

    </Section>
  )
}

export default Contact
