import React from 'react';
import "./Students.css"
import Navigation from "../Navigation/Navigation";

export default class StudentsTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="col-md-2">
                    <img className="img-responsive" src="resources/images/student.png"></img>
                </div>
                <div className="col-md-5" style={{padding: '10px'}}>
                    <h2>{this.props.student.name}</h2>
                    <div className="speech-bubble">
                        <strong>{this.props.student.note}</strong>
                    </div>
                </div>
            </div>
        );
    }
}