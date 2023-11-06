import React from 'react';
 import Navbar from '../../../Layout/Navbar/Navbar';
import './Home.css'; // Import your CSS file
import TopHome from '../HomeComponents/TopComponent/TopHome';
import ButtonandTrustedCopany from '../HomeComponents/ButtonandCompanies/ButtonandTrustedCopany';
// import Productivity from '../HomeComponents/Productivity/Productivity';
// import CodeEditors from '../HomeComponents/CodeEditors/CodeEditors';
import BottomHome from './BottomHome';
// import TopHome from '../HomeComponents/TopHome';

const Home = () => {
  return (
    <div className='home'>
     <Navbar/>
     <TopHome/>
     <ButtonandTrustedCopany/>
     <BottomHome/>
    
    </div>
  );
};

export default Home;
