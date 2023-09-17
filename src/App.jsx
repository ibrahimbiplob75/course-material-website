import { useState } from 'react'
import './App.css'

import Courses from "./Components/Courses/Courses"
import Header from './Components/Header/Header'
import Selected from './Components/Selected/Selected'

function App() {
    const [selectCourse, setSelectedCourse]=useState([]);
    const [credit, setcredit]=useState(0)
    const [Remaincredit, setRemaincredit]=useState(20)
    

    const selected_course=(course)=>{
       const { credits, id } = course;
        console.log(course)

      if (selectCourse.some((selected) => selected.id === id)) {
        alert('You have already enrolled in this course.');
        return; 
      }

        const newCredit=credit+credits
        if(newCredit>20){
          alert('You can not Excess more that 20 Credit ,so You are not able to Enrolled More!!');
          return; 
          }
        setcredit(newCredit);
        

        const newRemainCredit=Remaincredit-credits;
        if(newRemainCredit<0){
          alert('You have no sufficient Credit . So you are not able to Enrolled More!!');
          return; 
        }
        setRemaincredit(newRemainCredit);

        const newSelected_course=[...selectCourse,course];
        setSelectedCourse(newSelected_course);

      
        
    }

  return (
    <>
      
      <Header></Header>
      <div className="flex mt-10 justify-around">
        <Courses selected_course={selected_course}></Courses>
        <Selected  credit={credit} Remaincredit={Remaincredit} selectCourse={selectCourse} ></Selected>
        
      </div>
      
    
    </>
  )
}

export default App
