import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import StackedProgressbar from "./StackedProgressBar";

export default class AthleticsStatBar extends React.Component {

    render() {
        return (
            <div className="col-sm-2">
                <div className="collegeHappinessBar">
                    <h3 className="text-center">ATHLETICS</h3>
                    <br></br>
                    <StackedProgressbar image={"resources/images/athletictrait.png"} impact={this.props.impact} oldRating={this.props.oldRating}/>
                    <br/>
                </div>
            </div>
        );
    }
}