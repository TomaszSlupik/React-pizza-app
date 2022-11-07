import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Third from  "./components/third";
import { Route, BrowserRouter } from 'react-router-dom';
import Header from './components/header';


function Routing () {

return (
  
  <BrowserRouter>
    <div>
   <Header />   
  <Route exact path='/' component={App} />
  <Route path='/koszyk' component={Third} />
    </div>
  </BrowserRouter>
  
  )
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routing />
    
  </React.StrictMode>
);

