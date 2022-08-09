import React from 'react';
import videoBg from './assets/AF_BG_WEB.mp4'

function App() {
  return (
    <div className='main'>
      <video src={videoBg} autoPlay loop muted/>
    </div>
  );
}

export default App;