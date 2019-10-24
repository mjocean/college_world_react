import React from 'react';
import Navigation from "../Navigation/Navigation";
import StudentFeedback from "../Students/Students";
import SportsTop from "./SportsTop";
import SportsRecordTable from "./SportsRecordTable";
import AddSellSports from "./AddSellSports";
import CollegeOpenCreate from "../College/CollegeLaunchPad";

export default class Sports extends React.Component {
    //The json file: http://localhost:8080/enccollegeworld_war_exploded/rest/sports/acorn

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         data: null,
    //     };
    // }
    // componentDidMount() {
    //     fetch('http://localhost:8080/enccollegeworld_war_exploded/rest/sports/acorn')
    //         .then(response => response.json())
    //         .then(data => {this.setState({ data });
    //             console.log("Fetched college data " + data)
    //         });
    // }

    // render() {
    //     try {
    //         return (
    //             <div>
    //                 <h2>Start of college view...</h2>
    //                 <Navigation/>
    //                 {this.state.data && (
    //                     <h2>Coach name = {this.state.data[0].coachName}</h2>
    //                 )
    //                 }
    //                 {this.state.data && (
    //                     <h2>Hours until next game = {this.state.data[0].hoursUntilNextGame}</h2>
    //                 )
    //                 }
    //
    //             </div>
    //         );
    //     }catch(error) {
    //         return null
    //         // expected output: ReferenceError: nonExistentFunction is not defined
    //         // Note - error messages will vary depending on browser
    //     }
    //     /*
    //     <Navigation />
    //     return <h2>This is the overall college view.</h2>;
    //     */
    // }

    render() {
        try {
            return (
                <div>
                    <SportsTop sports = {this.props.everything.sports}/>
                    <SportsRecordTable sports = {this.props.everything.sports}/>
                    <AddSellSports sports = {this.props.everything.sports} collegeName={this.props.collegeName} everything={this.props.everything} replaceEverything={this.props.replaceEverything} setCollegeName={this.props.setCollegeName}  setLaunchStatus={this.props.setLaunchStatus}/>
                </div>
            );
        }catch(error) {
            return null
            // expected output: ReferenceError: nonExistentFunction is not defined
            // Note - error messages will vary depending on browser
        }

    }
}