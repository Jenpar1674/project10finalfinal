import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class Courses extends Component {
    state = {
        courses: [],
    }

    // Call getCourses method to fetch a list of courses
    // when the component is mounted.
    componentDidMount() {
        this.getCourses();
    }

    render() {
        return (
            <div className="bounds">
                {/* Loop courses state and return HTML elment */
                    this.state.courses.map(course => {return (
                        <div key={course.id} className="grid-33">
                            <Link className="course--module course--link shadow" to={`/courses/${course.id}`}>
                                <h4 className="course--label">Course</h4>
                                <h3 className="course--title">{course.title}</h3>
                            </Link>
                        </div>)}
                )}

                <div className="grid-33">
                    <Link className="course--module course--add--module shadow" to="/courses/create">
                        <h3 className="course--add--title">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 13 13" className="add">
                                <polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "></polygon>
                            </svg>New Course
                        </h3>
                    </Link>
                </div>
            </div>
        );
    }

    getCourses = async () => {
        const url = 'http://localhost:5000/api/courses/';
        const response = await this.props.context.data.api(url);
        
        if(response.status === 200) {
            response.json().then(data => this.setState({courses: data}));
        } else if (response.status === 500) {
            this.props.history.push(`/error`);
        } else {
            throw new Error();
        }
    }

    
}