import React from 'react';
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Tooltip from "react-bootstrap/Tooltip";

export default class CollegeBuildings extends React.Component {

    render() {

        function getColor(value) {
            let temp;
            temp='#4287f5';
            if (value>=79)
                temp='#37db45';
            else if (value<=39)
                temp='#fc3d17';
            else if (value<=49)
                temp='#ffae17';
            else if (value<=59)
                temp='#fce517';
            else if (value<=69)
                temp='#d3ff21';

            return temp;
        }

        let color=getColor(this.props.totalBuildingHealth);

        return (
            <div>
                <div className="collegeHappinessBar" style={{width: 150}}>
                    <CircularProgressbarWithChildren value={this.props.totalBuildingHealth} styles={buildStyles({pathColor: color})}>
                        {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                        <img
                            alt="buildingIcon"
                            style={{ width: 30, marginTop: -5 }}
                            src="https://image.flaticon.com/icons/svg/188/188379.svg"
                        />
                        <div style={{ fontSize: 12}}>
                            <strong>{this.props.totalBuildingHealth}%</strong>
                        </div>
                    </CircularProgressbarWithChildren>
                    <br/>
                </div>
            </div>
        );
    }
}