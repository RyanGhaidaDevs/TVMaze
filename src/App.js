import React from 'react';
import './App.css';
import MainContainer from './MainContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          Home | SEARCH TV SHOW
      </header>
      <div className="App-body">  
       <MainContainer> </MainContainer>
      </div> 
      <hr style={{
          color: '#EFEFEF',
          backgroundColor: '#EFEFEF',
          height: 4,
          borderColor: '#EFEFEF',
          width: '95%' ,
          
          }}
      />
      <h1 id="Contact-Us"> Contact Us </h1> 
      <footer className="App-footer"> 
        <div className="Footer-item"> 
           <a className="Orange-Text">Address </a> | Mailing 
           <br/>
           Primary Address Line
           <br/>
           Secondary Address Line
           <br/>
           12345 Postal Code
           <br/>
        </div>
        <div className="Footer-item"> 
        <a className="Orange-Text"> Phone </a> | Ring! Ring!
           <br/>
           Headline 
           <br/>
           +1 123 456 789
        </div>
        <div className="Footer-item"> 
        <a className="Orange-Text"> Email </a> | Swoosh! <br/> 
           email@email.com
        </div>
        <div className="Footer-item"> 
        </div>
      </footer> 
    </div>
  );
}

export default App;
