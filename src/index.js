import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Route, BrowserRouter } from 'react-router-dom';
import Header from './components/header';
import Third from './components/Third'
import { createContext } from 'react';

const Mycontext = createContext()
export const CtxConsumer = Mycontext.Consumer
const CtxProvider = Mycontext.Provider

function Routing () {

  const [item, SetItem] = useState(0)

  const refresh = (data) => {
    SetItem(data)
  }

return (
  
  <BrowserRouter>
  <CtxProvider value={{item: item, refresh: refresh}}>
  <div>
   <Header />   
  <Route exact path='/' component={App} />
  <Route exact path='/koszyk' component={Third} />
    </div>
  </CtxProvider>
  </BrowserRouter>
  
  )
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routing />
    
  </React.StrictMode>
);

