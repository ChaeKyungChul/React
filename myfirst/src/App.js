import React from 'react'
import './App.css';
import Header from './pages/Header';
import Aside from './pages/Aside';

const App = () => {
  return (
      <>
     <Header name="철수" age="30" />
     <div>본문</div>
     <Aside />
      </>
  )
}

export default App