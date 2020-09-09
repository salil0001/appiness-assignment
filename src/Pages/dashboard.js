import React from 'react'
import Navbar from '../Navbar';
import Dashboard from '../Dashboard';
import {connect} from 'react-redux'

function DashboardPage (props) {
    return (
      <>
        <Navbar />
        <Dashboard {...props}/>
      </>
    );
  };


const mapStateToProps = state => {
    return {
      username: state.login.credentials.username,
    };
  };
  
  
  export default connect(
    mapStateToProps,
    null
  )(DashboardPage);