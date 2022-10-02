import React from 'react';
/*import './App.css';*/
import Header from "./Components/Header";
import Navigation from './Components/Navigation';
import Main from './Components/Main';
import SubContents from "./Components/SubContents";
import Advertisement from './Components/Advertisement';
import Bottom from './Components/Bottom';
import Sub from './Components/Sub';
import Ap from './Components/Ap';

function App() {
  return (
    <div className="app">
      <Ap>
        <Header/>
        <Bottom>
          <Navigation/>
          <Main>
            <Sub>
              <SubContents/>
              <SubContents/>
              <SubContents/>
            </Sub>
            <Advertisement/>
          </Main>
        </Bottom>
      </Ap>
    </div>
  );
}

export default App;


