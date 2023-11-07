// import logo from './logo.svg';
import './App.css';
import BottomFooter from './Components/Footer/BottomNav';
import Footer from './Components/Footer/Footer';
import ParticlesComponent from './CoreUi/Background/Particle';
import Home from './Pages/Home/CoreHome/Home';

function App() {
  return (
    <div className="App">
      <ParticlesComponent id="tsparticles" />
      <Home/>
      <Footer/>
      <BottomFooter/>
    </div>
  );
}

export default App;
