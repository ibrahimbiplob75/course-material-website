import './App.css'

import Courses from "./Components/Courses/Courses"
import Header from './Components/Header/Header'
import Selected from './Components/Selected/Selected'

function App() {


  return (
    <>
      
      <Header></Header>
      <div className="flex mt-10 justify-around">
        <Courses></Courses>
        <Selected></Selected>
        
      </div>
      
    
    </>
  )
}

export default App
