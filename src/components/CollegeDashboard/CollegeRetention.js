import React from 'react';
import {CircularProgressbar} from "react-circular-progressbar";
// import { CircularProgressbar } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';

export default class CollegeRetention extends React.Component {

    render() {

        return (
            <div className="col-sm-2">
                <div className="well well-sm">
                    <h4>Retention</h4>
                    <CircularProgressbar value={this.props.everything.college.retentionRate} text={this.props.everything.college.retentionRate} strokeWidth={12} />
                    <br/>
                    <button href="#retentionDetails" type="button" className="btn btn-light"
                            data-toggle="collapse">Details
                    </button>
                    <div id="retentionDetails" className="collapse">
                        The rate is the percentage of students that remained at the college during the last week.
                    </div>
                </div>
            </div>
        );
    }
}