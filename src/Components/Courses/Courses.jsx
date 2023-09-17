import propTypes from 'prop-types';
import { useEffect, useState } from "react";
import Course from "../Course/Course";


const Courses = ({selected_course}) => {
    const [contents, setContents]=useState([])

    useEffect(()=>{
        fetch("/public/course.json")
        .then(res=>res.json())
        .then(data=>setContents(data))
        
    },[])
    return (
        <div className="w-2/3 grid gap-4 grid-cols-3 grid-rows-3">
           
           {
            contents.map(course=> <Course key={course.id} selected_course={selected_course} course={course}></Course>)
           }
        </div>
    );
};

Courses.propTypes={
    selected_course:propTypes.func
}

export default Courses;


 