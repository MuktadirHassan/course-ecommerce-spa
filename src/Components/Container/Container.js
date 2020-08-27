import React, { useState } from 'react';
import Course from '../Course/Course';
import Cart from '../Cart/Cart';
import courseData from '../../fakeData/courses';

const Container = () => {
    const fakeData = courseData;
    const [courses, setCourses] = useState(fakeData);
    const [cart, setCart] = useState([]);
    
    const handleCourse = (course) => {
        const newCourse = [...cart,course];
        setCart(newCourse);
    };
    return (
        <div className="container">
                <Cart cart={cart}></Cart>
            <div className="row">
                {
                    courses.map(x => <Course courseData={x} handleCourse={handleCourse} key={x.id}></Course>)
                }
            </div>
        </div>
    );
};

export default Container;