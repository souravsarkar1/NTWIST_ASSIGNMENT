import React, { useState } from 'react';
import "./CodeEditors.css";
import { GiHamburgerMenu } from "react-icons/gi"
import { AiFillGithub } from "react-icons/ai"
import { IoIosNotifications } from "react-icons/io"
const CodeEditors = () => {
  const [code, setCode] = useState(`<div class="position-absolute width-full color-bg-default" style="bottom: -4rem;">
  <div class="container-xl p-responsive">
    <div class="d-flex flex-justify-center flex-lg-justify-end color-bg-default">
      <div class="col-8 col-sm-7 col-md-6 col-lg-5 position-relative z-2 right-lg-n12 events-none">
        <picture>
          <source srcset="astro-mona.webp" type="image/webp">
          <img src="astro-mona.svg" width="960" height="967" class="home-astro-mona width-full position-absolute bottom-0 height-auto" alt="Mona looking at GitHub activity across the globe">
        </picture>
      </div>
    </div>
  </div>
</div>`)
  return (
    <div className='codeEditorDiv' style={{ display: 'flex' }}>
      <div className='codeEditor'>
        {/* Code Editor */}
        <div id='code-menu'>
          <h1>
            index.html
          </h1>
          <h1>
            package.json</h1>
          <h1>
            package.json
          </h1>
        </div>
        <textarea value={code} onChange={(eo)=>setCode(eo.target.value)} placeholder="Enter your code here..." />
      </div>
      <div className='imageContainer'>
        <div id='icons-menu'>
          <GiHamburgerMenu size={30} />
          <AiFillGithub size={30} />
          <IoIosNotifications size={30} />
        </div>
        <img src="https://github.githubassets.com/assets/globe-d6f3f4ee645a.jpg?width=742" alt="Description" />
      </div>
    </div>
  );
}

export default CodeEditors;
