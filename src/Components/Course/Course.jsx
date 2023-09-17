import propTypes from 'prop-types'

const Course= ({course}) => {
    const {title, img ,short_description}=course;

    return (
    <div className="ml-28 mb-10">
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="p-2">
                <img src={img} alt={`${title}`} className="w-full" />
            </figure>
            <div className="card-body text-left p-3">
                <h2 className="card-title">{title}</h2>
                <p>{short_description}</p>
                <div className="card-actions text-center">
                    <button className="btn btn-active btn-primary">Select</button>
                </div>
            </div>
        </div>
    </div>
    );
};

Course.propTypes={
        Course:propTypes.object.isRequired
}

export default Course;