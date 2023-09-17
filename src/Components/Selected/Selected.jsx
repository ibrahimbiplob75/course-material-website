import propTypes from 'prop-types';
import Select from '../select/Select';




const Selected = ({selectCourse,credit,Remaincredit}) => {
   
    
    
        
    
    
    return (
        
            <div className="">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <h2 className="text-2xl text-center">Credit Hour Remaining {Remaincredit} hr</h2>
                    <hr></hr>
                    <div className="card-body text-left p-3">
                        <h2 className="card-title">Course Name </h2>
                        
                        {
                            selectCourse.map(enroll=>
                            <Select key={enroll.id}  selectCourse={enroll}>

                            </Select>)
                        }
                        
                        <br></br>
                        <div className="card-actions text-center">
                           <h3>Total Credit Hour:{credit}
                           
                           </h3>
                          
                           
                        </div>
                         <hr></hr>
                        <div>
                            <h3>Total Price: 100 USD </h3> 
                           <hr></hr>
                        </div>
                    </div>
                </div>
            </div>
        
    );
};
Selected.propTypes={
    selectCourse:propTypes.array,
    credit:propTypes.number,
    Remaincredit:propTypes.number,
    no:propTypes.number
}

export default Selected;