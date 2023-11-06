import React from 'react';
import './Codespaces.css';

const Codespaces = () => {
  return (
    <div>
      <div className='codespaces'>
        <div className='codespacesContent'>
          <h2 ><span>GitHub Codespaces offers a complete dev environment in seconds</span>, so you can code, build, test, and open pull requests from any repo anywhere.</h2>
          <button className='buttonContainer'>Check out GitHub Codespaces →</button>
        </div>
        <div className='codespacesImage'>
          <img src="https://github.githubassets.com/assets/illo-ports-cb650eaf237c.png" alt="logo" />
          <img style={{
            margin: "-187px 0px 0px 0px"
          }} src="https://github.githubassets.com/assets/illo-context-menu-51a3417d6621.png" alt="logo" />
          <img style={{ width: "10px", marginTop: "-100px" }} src="https://github.githubassets.com/assets/illo-cursor-ad4eda534eba.png" alt="mouse" />
        </div>

      </div>
      <div className='advitagement'>
        <button>Did You Know?</button>
        <h1>22% increase</h1>
        <h3>in developer productivity
          after three years with GitHub1</h3>
      </div>
    </div>
  );
}

export default Codespaces;
