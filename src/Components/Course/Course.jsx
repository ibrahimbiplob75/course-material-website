import propTypes from 'prop-types'

const Course= ({course,selected_course}) => {
    const {title, img ,short_description,price,credits}=course;
    
    return (
    <div className="ml-28 mb-10">
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="p-2">
                <img src={img} alt={`${title}`} className="w-full" />
            </figure>
            <div className="card-body text-left p-3">
                <h2 className="card-title">{title}</h2>
                <p>{short_description}</p>
                
            </div>

            <div className="card-actions justify-between p-6 ">
                <p className='font-bold'>$ Price : {price} </p>
                <p className='font-bold'>Credit : {credits} hr</p>
            </div>

            <div className="card-actions text-center mb-4 justify-center p-3 ">
                    <button onClick={()=>selected_course(course)} className="btn btn-active btn-primary w-full">Select</button>
            </div>
        </div>
    </div>
    );
};


Course.propTypes={
    course:propTypes.object.isRequired,
    selected_course:propTypes.func,
}

export default Course;