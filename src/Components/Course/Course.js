import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
const Course = (props) => {
    const course = props.courseData;
    return (
        
        
        <div className="col-md-4  mb-5">
            <div className="card text-white bg-dark mb-3 shadow" style={{height:'100%'}}>
            <div className="card-header">{course.id}</div>
                <div className="card-body d-flex flex-column justify-content-between">
                    <div className="card-text">
                        <h4>{course.name}</h4>
                        <p className="text-muted">By {course.author}</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <h3 className="rounded p-2">${course.price}</h3>
                        <button className="btn btn-primary" onClick={() => props.handleCourse(course)}>Add to Cart <FontAwesomeIcon icon={ faCartPlus }></FontAwesomeIcon></button><small className="text-muted">{course.duration}</small>
                        </div>
                </div>
            </div>
        </div>
        
        
    );
};

export default Course;