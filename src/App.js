import './App.css';
import Contact from './component/Contact';
import Hero from './component/Hero';
import Test from './component/Test';
import Who from './component/Who';
import Works from './component/Works';
import styled from 'styled-components'



//Bu da react da inline css yazmak için bir yöntem
const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth ;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/bg.jpeg");
  &::-webkit-scrollbar {
    display: none;
  }
`;






function App() {
  return (
    <Container  >
      <Hero/>
      <Who/>
      <Works/>
      {/* <Contact/> */}
    </Container>
  );
}

export default App;
