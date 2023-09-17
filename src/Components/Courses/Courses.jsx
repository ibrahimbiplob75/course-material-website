import { useEffect, useState } from "react";
import Course from "../Course/Course";

const Courses = () => {
    const [contents, setContents]=useState([])

    useEffect(()=>{
        fetch("/public/course.json")
        .then(res=>res.json())
        .then(data=>setContents(data))
        
    },[])
    return (
        <div className="w-2/3 grid gap-4 grid-cols-3 grid-rows-3">
           
           {
            contents.map(content=> <Course key={content.id} course={content}></Course>)
           }
        </div>
    );
};

export default Courses;


 