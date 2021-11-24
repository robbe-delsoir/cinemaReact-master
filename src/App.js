import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ApiInfo from './components/ApiInfo'


function App() {
  return (

  <div>
  <body>
    <div className="header">
      <Header/>
    </div>
    <div class="api">
    <ApiInfo/>
    </div>
    <div className="footer">
      <Footer/>
    </div>
    </body>
  </div>
  );

  
}


export default App;

