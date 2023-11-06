// import logo from './logo.svg';
import './App.css';
import ParticlesComponent from './CoreUi/Background/Particle';
import Home from './Pages/Home/CoreHome/Home';

function App() {
  return (
    <div className="App">
      <ParticlesComponent id="tsparticles" />
      <Home/>
    </div>
  );
}

export default App;
