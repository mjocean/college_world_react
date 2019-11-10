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
import CurrentDay from "../CurrentDay/CurrentDay";
import CurrentBalance from "../CurrentBalance/CurrentBalance";
import CollegeOpenCreate from "../College/CollegeOpenCreate";


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
        this.changeTimeFunction = this.changeTimeFunction.bind(this);

        this.timing = 10000;
        this.debugDaySpeedRef = React.createRef();
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

    changeTimeFunction = (f) => {
        // debug
        this.timing = this.debugDaySpeedRef.current.value;
        if (this.timing < 2000) {
            console.log("Timing less than 2000, resetting to 10000");
            this.timing = 10000;
        }
        if (f === 0) {
            console.log("PLAY");
            clearInterval(this.timer);
            this.timer = setInterval(() => this.advanceDay(), this.timing);
        } else if (f === 1) {
            console.log("PAUSE");
            clearInterval(this.timer);
        } else if (f === 2) {
            console.log("FAST FORWARD");
            clearInterval(this.timer);
            this.timer = setInterval(() => this.advanceDay(), this.timing/2);
        }
    }

    componentWillUnmount() {
        console.log("App unmounting.");
        clearInterval(this.timer);
        this.timer = null;
    }

    componentDidMount() {
        this.setState({ launchStatus: 'loadingInProgress' });
        clearInterval(this.timer);
        // debug
        this.timing = this.debugDaySpeedRef.current.value;
        if (this.timing < 2000) {
            console.log("Timing less than 2000, resetting to 10000");
            this.timing = 10000;
        }
        this.timer = setInterval(() => this.advanceDay(), this.timing);

        fetch('http://localhost:8080/enccollegeworld_war_exploded/rest/everything/' + this.state.collegeName)
            .then(response => response.json())
            .then(data => {this.setState({ launchStatus:'loadingDone', everything: data });
                console.log("Fetched college data " + data)
            });
    }

    advanceDay = () => {
        fetch('http://localhost:8080/enccollegeworld_war_exploded/rest/college/' + this.state.collegeName + '/nextDay')
            .then(response => response.json())
            .then(data => {
                this.setState({isLoading: false, everything: data});
                this.setState({isLoading: false, everything: data});
                clearInterval(this.timer);
                // debug
                this.timing = this.debugDaySpeedRef.current.value;
                if (this.timing < 2000) {
                    console.log("Timing less than 2000, resetting to 10000");
                    this.timing = 10000;
                }
                this.timer = setInterval(() => this.advanceDay(), this.timing);
            });
    }

    render() {
        const {launchStatus, everything, collegeName} = this.state;
        // if (launchStatus || !everything ) {
        //     return (<div><CollegeLaunchPad collegeName={collegeName} launchStatus={launchStatus} everything={everything} replaceEverything={this.replaceEverything} setCollegeName={this.setCollegeName} setLaunchStatus={this.setLaunchStatus} /></div>);
        // }

        return (
            <div>
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
                                            <li><Link to='/launch'>Launch</Link></li>
                                            <li><Link to='/college'>Dashboard</Link></li>
                                            <li><Link to='/students'>Students</Link></li>
                                            <li><Link to='/building'>Building</Link></li>
                                            <li><Link to='/sports'>Sports</Link></li>
                                            <li><Link to='/faculty'>Faculty</Link></li>
                                            <li><Link to='/objectives'>Objectives</Link></li>
                                            <li><Link to='/store'>Store</Link></li>
                                        </ul>
                                        <ul className="nav navbar-nav navbar-right">
                                            <li><Link to='/currentBalance'>Balance</Link></li>
                                            <li><Link to='/currentDay'>Current Day</Link></li>
                                            <li><Link to='/about'>About</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </aside>
                        <main>
                            <Route path="/launch" render={() => <CollegeOpenCreate collegeName={collegeName} everything={everything} replaceEverything={this.replaceEverything} setCollegeName={this.setCollegeName}  setLaunchStatus={this.setLaunchStatus}/>} />
                            <Route path="/about" render={() => <About everything={everything} />} />
                            <Route path="/college" render={() => <CollegeLaunchPad collegeName={collegeName} launchStatus={launchStatus} everything={everything} replaceEverything={this.replaceEverything} setCollegeName={this.setCollegeName} changeTimeFunction={this.changeTimeFunction} />}/>
                            <Route path="/building" render={() => <Buildings everything={everything} replaceEverything={this.replaceEverything} />} />
                            <Route path="/students" render={() => <Students everything={everything} />} />
                            <Route path="/objectives" render={() => <Objectives everything={everything} />} />
                            <Route path="/store" render={() => <Store everything={everything} />} />
                            <Route path="/faculty" render={() => <Faculty everything={everything} />} />
                            <Route path="/sports" render={() => <Sports collegeName={collegeName} everything={everything} collegeName={collegeName} launchStatus={launchStatus} everything={everything} replaceEverything={this.replaceEverything} setCollegeName={this.setCollegeName}  />}/>
                            <Route path="/about" render={() => <About everything={everything} />} />
                            <Route path="/currentDay" render={() => <CurrentDay everything={everything} />} />
                            <Route path="/currentBalance" render={() => <CurrentBalance everything={everything} />} />
                        </main>
                    </div>
                </Router>
                <div className="well well-sm">
                    Refresh Speed (ms)
                    <input id="debugDaySpeed" ref={this.debugDaySpeedRef} type={"number"} placeholder={"10000 ms"} defaultValue={"10000"}/>
                </div>
            </div>
        );
    }
}

