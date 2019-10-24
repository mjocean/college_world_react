import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import CollegeLaunchPad from "../College/CollegeLaunchPad";
import Students from "../Students/Students";
import Sports from "../Sports/Sports";
import Faculty from "../Faculty/Faculty";
import Objectives from "../Objectives/Objectives";
import Store from "../Store/Store";
import About from "../About/About";
import Buildings from "../Buildings/Buildings";


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            launchStatus: 'collegeNotChosen',
            everything: null,
            collegeName: ""
        };
        this.replaceEverything = this.replaceEverything.bind(this)
        this.setCollegeName = this.setCollegeName.bind(this)
        this.setLaunchStatus = this.setLaunchStatus.bind(this)
    }

    replaceEverything(newEverything) {
        this.setState({launchStatus:'loadingDone', everything: newEverything})
    }

    setCollegeName(newCollegeName) {
        this.setState({collegeName:newCollegeName})
    }

    setLaunchStatus(newLaunchStatus) {
        this.setState({launchStatus:newLaunchStatus})
    }

    componentWillUnmount() {
        console.log("App unmounting.");
    }

    componentDidMount() {
        this.setState({ launchStatus: 'loadingInProgress' });

        fetch('http://localhost:8080/enccollegeworld_war_exploded/rest/everything/acorn')
            .then(response => response.json())
            .then(data => {this.setState({ launchStatus:'loadingDone', everything: data });
                console.log("Fetched college data " + data)
            });
    }

    render() {
        const {launchStatus, everything, collegeName} = this.state;
        // if (launchStatus || !everything ) {
        //     return (<div><CollegeLaunchPad collegeName={collegeName} launchStatus={launchStatus} everything={everything} replaceEverything={this.replaceEverything} setCollegeName={this.setCollegeName} setLaunchStatus={this.setLaunchStatus} /></div>);
        // }

        return (
            <Router>
                <div>
                    <aside>
                        <nav className="navbar navbar-inverse">
                            <div className="container-fluid">
                                <div className="navbar-header">
                                    <button type="button" className="navbar-toggle" data-toggle="collapse"
                                            data-target="#myNavbar">
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                </div>
                                <div className="collapse navbar-collapse" id="myNavbar">
                                    <ul className="nav navbar-nav">
                                        <li><Link to='/college'>Dashboard</Link></li>
                                        <li><Link to='/students'>Students</Link></li>
                                        <li><Link to='/building'>Building</Link></li>
                                        <li><Link to='/sports'>Sports</Link></li>
                                        <li><Link to='/faculty'>Faculty</Link></li>
                                        <li><Link to='/objectives'>Objectives</Link></li>
                                        <li><Link to='/store'>Store</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </aside>
                    <main>
                        <Route path="/about" render={() => <About everything={everything} />} />
                        <Route path="/college" render={() => <CollegeLaunchPad collegeName={collegeName} launchStatus={launchStatus} everything={everything} replaceEverything={this.replaceEverything} setCollegeName={this.setCollegeName}  />}/>
                        <Route path="/building" render={() => <Buildings everything={everything} replaceEverything={this.replaceEverything} />} />
                        <Route path="/students" render={() => <Students everything={everything} />} />
                        <Route path="/objectives" render={() => <Objectives everything={everything} />} />
                        <Route path="/store" render={() => <Store everything={everything} />} />
                        <Route path="/faculty" render={() => <Faculty everything={everything} />} />
                        <Route path="/sports" render={() => <Sports collegeName={collegeName} everything={everything} collegeName={collegeName} launchStatus={launchStatus} everything={everything} replaceEverything={this.replaceEverything} setCollegeName={this.setCollegeName}  />}/>
                        <Route path="/about" render={() => <About everything={everything} />} />
                    </main>
                </div>
            </Router>
        );
    }
}

