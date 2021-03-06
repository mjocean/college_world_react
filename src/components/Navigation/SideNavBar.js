import React from 'react';
import {NavLink} from "react-router-dom";
import './Navigation.css';

export default class SideNavBar extends React.Component {

    render() {
        return(
            <div className="col-md-2">
                <nav className="sidebar bg-light col-md-2">
                    <div className="sidebar-sticky">
                        <img alt="collegeWorldLogo" id="logo" src="resources/images/college_world_icons/logo.png"></img>
                        <ul className="nav flex-column">
                            {/*<li className="nav-item"><Link to='/launch'>Launch</Link></li>*/}
                            <li className="nav-item">
                                <NavLink to='/college' activeClassName="active">
                                    <img alt="dashboardImage" className="nav-item-icons" src="resources/images/college_world_icons/dashboard_information_bar.png"></img>
                                    Dashboard
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/schooltraits' activeClassName="active">
                                    <img alt="traitsImage" className="nav-item-icons" src="resources/images/college_world_icons/about__information_bar.png"></img>
                                    School Traits
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/students' activeClassName="active">
                                    <img alt="studentImage" className="nav-item-icons" src="resources/images/college_world_icons/students_information_bar.png"></img>
                                    Students
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/admissions' activeClassName="active">
                                    <img alt="admissionsImage"  className="nav-item-icons" src="resources/images/college_world_icons/admission.png"></img>
                                    Admissions
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/building' activeClassName="active">
                                    <img alt="buildingsImage" className="nav-item-icons" src="resources/images/college_world_icons/buildings_information_bar.png"></img>
                                    Buildings
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/sports' activeClassName="active">
                                    <img alt="sportsImage"  className="nav-item-icons" src="resources/images/college_world_icons/sports_information_bar.png"></img>
                                    Sports
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/faculty' activeClassName="active">
                                    <img alt="facultyImage" className="nav-item-icons" src="resources/images/college_world_icons/students_information_bar.png"></img>
                                    Faculty
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/finances' activeClassName="active">
                                    <img alt="financesImage"  className="nav-item-icons" src="resources/images/college_world_icons/dollar_character.png" height="27"></img>
                                    Finances
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/objectives' activeClassName="active">
                                    <img alt="objectivesImage"  className="nav-item-icons" src="resources/images/college_world_icons/objectives_information_bar.png"></img>
                                    Objectives
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/store' activeClassName="active">
                                    <img alt="storeImage"  className="nav-item-icons" src="resources/images/college_world_icons/store_information_bar.png"></img>
                                    Store
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/about' activeClassName="active">
                                    <img alt="aboutImage"  className="nav-item-icons" src="resources/images/college_world_icons/about__information_bar.png"></img>
                                    About
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/launch' onClick={this.props.doExit} activeClassName="active">
                                    <img alt="exitImage" className="nav-item-icons" src="resources/images/college_world_icons/exit_information_bar.png"></img>
                                    Exit
                                </NavLink>
                            </li>
                        </ul>
                        {/*<button class="btn btn-success playmode">PLAY MODE</button>*/}
                    </div>
                </nav>
            </div>

        );
    }
}