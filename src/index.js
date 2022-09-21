import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import Third from  "./components/third";
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter } from 'react-router-dom';


// function Routing () {

// return (
  
//   <BrowserRouter>
//     <div>
      
//   <Route exact path='/' component={App} />
//   <Route exact path='/koszyk' component={Third} />


//     </div>
//   </BrowserRouter>
  
//   )
// }

// ReactDOM.createRoot (< Routing />, document.getElementById('root'))

// ReactDOM.render((
//   <Router>
//     <Route path="/" component={App} />
//     <Route path="/koszyk" component={Third} />
//   </Router>
// ), document.getElementById('root'));


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Router>
//     <Route path="/" component={App} />
//     <Route path="/koszyk" component={Third} />
//   </Router>
// );


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
