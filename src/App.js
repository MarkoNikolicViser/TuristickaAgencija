import React,{useState} from 'react'
//importing components
import Home from './components/home'
import './App.css'
import Lokacije from './components/lokacije '
import LoaderTest from './components/loaderTest'
import Kontakt from './components/kontakt'

const App=()=>{

    return(
        <>
            <Home />
            <Lokacije />
            <Kontakt />
        </>
    )
}
export default App;