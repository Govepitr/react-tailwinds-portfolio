import React from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import About from './components/About';
import Project from './components/Project';
import Footer from './components/Footer';
import './App.css';


function App() {
  return (
    <div>
      <main>
        <Nav></Nav>
        <Header></Header>
        <About></About>
        <Project></Project>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
