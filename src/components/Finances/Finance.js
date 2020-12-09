import React from 'react';
import FinancesTable from "../Finances/FinanceTable";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FinanceTable from "../Finances/FinanceTable";
import FinanceLog from "./FinanceLog";
import FinanceLoanContract from "./FinanceLoanContract";
import FinanceLoanTable from "./FinanceLoanTable";
import TipsBox from "../College/TipsBox";
import ExpensesGraph from "./ExpensesGraph";
import FinancesGraph from "./FinancesGraph";
import Tuition from "./Tuition";

export default class Finance extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hideShowTipsText: "Hide Tips",
            isHide: false,
            showNextTip: true
        }
        this.hideShowTipsText = this.hideShowTipsText.bind(this);
    }

    hideShowTipsText = () => {
        let tips = document.getElementById('hideTips');
        if(this.state.isHide){
            this.state.hideShowTipsText = "Hide tips"
            this.setState({isHide: false})
            tips.style.display = "block";
        }else {
            this.state.hideShowTipsText = "Show tips"
            this.setState({isHide: true})
            tips.style.display = "none";
        }
        this.setState({ hideShowTipsText: this.state.hideShowTipsText});
    }

    render() {

        return (
            <div className="card-deck my-3">
                <div className="value-tips">
                    <button type="button" onClick={this.hideShowTipsText} className="btn btn-info">{this.state.hideShowTipsText}</button>
                    <div id="hideTips">
                        <TipsBox everything = {this.props.everything} name = {'Value'} tips = {this.props.everything.college.collegeTips.valueTips}/>
                    </div>
                </div>
                <h1 className="finance-header">College Finances</h1>
                <Container>
                    <Row>
                        <Col sm={4}><FinanceTable everything={this.props.everything} replaceEverything={this.props.replaceEverything}/></Col>
                        <Col sm={4}><FinancesGraph everything={this.props.everything}/></Col>
                        <Col sm={4}><ExpensesGraph everything={this.props.everything}/></Col>
                    </Row>
                    <Row>
                        <Col sm={4}><FinanceLog everything={this.props.everything}/></Col>
                        <Col sm={4}><FinanceLoanContract everything={this.props.everything} replaceEverything={this.props.replaceEverything}/></Col>
                        <Col sm={4}><FinanceLoanTable className="table" everything={this.props.everything} replaceEverything={this.props.replaceEverything}/></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}