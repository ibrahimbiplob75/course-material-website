import propTypes from 'prop-types';

const Select = ({selectCourse}) => {
     const {title}=selectCourse;
    
    return (
        <div>
            
             <p>{title}</p> 
            
        </div>
    );
};


Select.propTypes={
    selectCourse:propTypes.object
}

export default Select;