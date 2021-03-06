import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import LoginModal from './LoginModal';
import CustomNavbar from './CustomNavbar';

import ReviewerDetails from './ReviewerDetails';
import AddReview from './AddReview';
import { BrowserRouter, Route } from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import EmployeeList from './EmployeeList';
import Transaction from './Transactions';
import ReviewHistory from './ReviewHistory';
import EmployeeTransaction from './EmployeeTransactions';
import EmployeeDetails from './EmployeeDetails';
import QuickAnalysis from './QuickAnalysis';

class Employee extends Component{

    componentWillMount(){
        // composerAPI.getEmployee()
        // .then(res)
    }

    createEmployeeData(){
        
    }

    render(){
        return(
            <div style={{overflow:"hidden",height:"100vh"}}>   
                <div className="col-md-12" style={{backgroundImage: 'linear-gradient(135deg,#006064 0%,#26C6DA 100%)',height:'46px'}}>
                    <div className="row" style={navstyle}>
                        <CustomNavbar />
                    </div>
                </div>
                <div className="row" style={{overflow:"none"}}>
                    <div className="col-md-2" style={{marginLeft:"0px",backgroundColor:"#FAFAFA",height:"100vh",overflow:"hidden"}}>
                        <h1>
                            <div className="row" style ={linkStyle}>
                                
                                <NavLink to="/employee/details" style={lstyle} activeStyle={linkactive}>My Details</NavLink>

                                <NavLink to="/employee/transactions" style={lstyle} activeStyle={linkactive}>View Transactions</NavLink>
                                
                            </div>
                        </h1>
                    </div>
                    <div className="col-md-10" style={{overflow:"auto",position:'relative',height:"92vh",paddingLeft:"40px",paddingTop:"20px"}}>
                        <Route exact path="/employee/details" component={EmployeeDetails}/>
                        <Route exact path="/employee/transactions" component={EmployeeTransaction}/>
                        <Route exact path="/employee/quick-analysis" component={QuickAnalysis}/>
                        
                    </div>
                </div>   
            </div>
        )
    }
}

const navstyle={
    marginLeft:'120px',
    marginRight:'120px'
}

const titlestyle={
    fontSize: '30px',
    fontWeight: '200',
    marginBottom:'20px'
}
const itemstyle={
    height: '20px',
    marginBottom:'35px'
}
const labelstyle={
    fontWeight:'bold',
    color: '#333',
    fontSize:'14px',
}

const ListStyle = {
    marginLeft:"25px",
    marginTop:"50px"
  };

const buttonStyle = {
    backgroundColor: "#545456",
    color: "#fff",
    borderRadius: "2px",
    boxShadow: "0 2px 2px 0 rgba(0,0,0,0.16)",
    height: "42px",
    width: "100%",
    fontSize: "16px",
    marginTop:"50px"
}

const lstyle={
    fontSize: '20px',
    lineHeight: '16px',
    color: '#666666',
    display: 'block',
    msFlex: '1',
    textDecoration: 'none',
    fontWeight:'500',
    marginTop:"25px",
    marginLeft:'20px'
}
const linkStyle={
    marginTop:"0px",
    marginLeft:"20px"
}

const linkactive={
    color: '#000000'
}


function mapStateToProps(state){
    return{
        loginModal:state.loginModal
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators(
        {
            
        }
        ,dispatch);
  }
  
export default connect(mapStateToProps,matchDispatchToProps)(Employee);
