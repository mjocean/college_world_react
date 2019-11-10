import React from 'react';
import '../Faculty/Faculty.css';
import {Link} from "react-router-dom";

export default class FacultyMember extends React.Component{
    render() {
        const faculty = this.props.faculty;
        const facultyNumber = this.props.facultyNumber;

        return(
           <li class = "list-group-item">
               <b class = "facultyName">{faculty.facultyName}</b>
            </li>
        );
    }
}

//<button id = "details" className="btn btn-primary" type="button" data-toggle="collapse"
//data-target = "#collapseMenu" aria-expanded="false" aria-controls="collapseExample">Details</button>