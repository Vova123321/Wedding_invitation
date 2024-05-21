import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import React, { useEffect } from 'react'
const App = () => {


  return (
    <>
        <div className="wrapper">
            {/* <Header></Header> */}
            <Main></Main>
            <Footer></Footer>
        </div>
    </>
  )
}

export default App
