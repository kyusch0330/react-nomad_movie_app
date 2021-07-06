import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Detail from './routes/Detail';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="app">
      <HashRouter>
        <Header />
        <Route path="/" exact={true} component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/movie/:id" component={Detail}/>
      </HashRouter>
    </div>
  )
}

export default App;