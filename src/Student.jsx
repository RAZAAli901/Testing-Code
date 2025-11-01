import { PropTypes } from 'prop-types';


function Student(props){
return(

    <div className="student">
        <p>Name: {props.name}</p>
        <p>Age: {props.Age}</p>
        <p>Student: {props.Student ? "Yes" : "No"}</p>
    </div>


);
}
Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  Student: PropTypes.bool,     
}
Student.defaultProps = {
    name: "Guest",
    age: 0,
    Student: false,
}
export default Student