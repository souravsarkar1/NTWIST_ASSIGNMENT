// import logo from './logo.svg';
import './App.css';
import Footer from './Layout/Footer/Footer';
// import { Heading } from '@chakra-ui/react';
import Navbar from './Layout/Navbar/Navbar';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">

      <Navbar />

      <Home />
      
      <Footer/>
    </div>
  );
}

export default App;
