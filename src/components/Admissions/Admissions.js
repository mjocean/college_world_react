import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Controls from "../Admissions/Controls";
import Freshmen from "./FreshmenPanel";
import Application from "./Application";
import './Admissions.css'
import AcademicsStatBar from "./AdmissionsEffects/AcademicsStatBar";
import AthleticsStatBar from "./AdmissionsEffects/AthleticsStatBar";
import SocialStatBar from "./AdmissionsEffects/SocialStatBar";

export default class Admissions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            applicationAppear : false,
            currentStudent: null
        };
        this.oldNumStudents = this.props.everything.college.numberStudentsAdmitted;
        this.newNumStudents = this.props.everything.admissions.openCapacity;
        this.setApplicationShow = (value) => {this.setState({applicationAppear:value})}
        this.handleCloseApplication = () => this.setApplicationShow(false);

        this.handleShowApplication = (data) => {
            this.state.currentStudent = data;
            this.setApplicationShow(true);
        }
    }

    calculateAcademicImpact(){
        const oldAcademicRating = this.props.everything.college.academicRating;
        const newAcademicRating = this.props.everything.admissions.academicRatingImpact;

        if(newAcademicRating > 0){
            return (((oldAcademicRating*this.oldNumStudents)+(newAcademicRating*this.newNumStudents))/(this.oldNumStudents + this.newNumStudents));
        }
        else{
            return oldAcademicRating;
        }
    }

    calculateAthleticImpact(){
        const oldAthleticRating = this.props.everything.college.athleticRating;
        const newAthleticRating = this.props.everything.admissions.athleticRatingImpact;

        if(newAthleticRating > 0){
            return (((oldAthleticRating*this.oldNumStudents)+(newAthleticRating*this.newNumStudents))/(this.oldNumStudents + this.newNumStudents));
        }
        else{
            return oldAthleticRating;
        }
    }

    calculateSocialImpact(){
        const oldSocialRating = this.props.everything.college.socialRating;
        const newSocialRating = this.props.everything.admissions.socialRatingImpact;

        if(newSocialRating > 0){
            return (((oldSocialRating*this.oldNumStudents)+(newSocialRating*this.newNumStudents))/(this.oldNumStudents + this.newNumStudents));
        }
        else{
            return oldSocialRating;
        }
    }

    render() {
        let totalPotentialStudents = this.props.everything.admissions.groupA.length +
            this.props.everything.admissions.groupB.length +
            this.props.everything.admissions.groupC.length;
        return(
            <div>
                <h2 className="header">Admissions</h2>
                    <div className="row m-2">
                        <div className="col-sm text-center topbar navbar navbar-default navbar-fixed-top">
                            <img alt="questionMark" className="topbar-icon" src="resources/images/college_world_icons/total_students.png"></img>
                            <div className="topbar-text">
                                <h4><strong>{this.props.everything.college.studentsGraduating} / {this.props.everything.objectives.studentCount}</strong></h4>
                                <h6>Students Graduating</h6>
                            </div>
                        </div>
                        <div className="col-sm text-center topbar">
                            <img alt="presentation" className="topbar-icon" src="resources/images/presentation.png"/>
                            <div className="topbar-text">
                                <h4><strong>{this.props.everything.admissions.openCapacity}</strong></h4>
                                <h6>Open Slots for Next Year</h6>
                            </div>
                        </div>
                        <div className="col-sm text-center topbar" id="last-bar">
                            <img alt="questionMark" className="topbar-icon" src="resources/images/college_world_icons/question_mark.png"></img>
                            <div className="topbar-text">
                                <h4><strong>{totalPotentialStudents}</strong></h4>
                                <h6>Students Considering</h6>
                            </div>
                        </div>
                    </div>
                <Application student = {this.state.currentStudent} show={this.state.applicationAppear} handleClose={this.handleCloseApplication} />
                <div className="card-deck my-3">
                    <AcademicsStatBar oldRating={this.props.everything.college.academicRating} impact={this.calculateAcademicImpact()}/>
                    <AthleticsStatBar oldRating={this.props.everything.college.athleticRating} impact={this.calculateAthleticImpact()}/>
                    <SocialStatBar oldRating={this.props.everything.college.socialRating} impact={this.calculateSocialImpact()}/>
                </div>

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br /><br /><br />





                <div>
                    <Controls everything={this.props.everything} replaceEverything={this.props.replaceEverything}/>
                </div>
                <Container>
                    <Row>
                    <div className="col-sm-4" id="border">
                        <Freshmen popup={this.handleShowApplication} label = {"Group A"} admissions={this.props.everything.admissions.groupA} everything={this.props.everything}/>
                    </div>
                    <div className="col-sm-4" id="border">
                        <Freshmen popup={this.handleShowApplication} label = {"Group B"} admissions={this.props.everything.admissions.groupB} everything={this.props.everything}/>
                    </div>
                    <div className="col-sm-4" id="border">
                        <Freshmen popup={this.handleShowApplication} label = {"Group C"} admissions={this.props.everything.admissions.groupC} everything={this.props.everything}/>
                    </div>
                    </Row>
                </Container>
            </div>
            );
        }
}
