import React, { useState,useEffect } from "react";
import { useNavigate } from "@reach/router"
import "./Navbar.scss";
import Bird from "./bird.svg";
import SignIn from "../SignIn/SignIn";
import { connect } from "react-redux";

function Index(props) {
  const [isSignIn, setSignIn] = useState(false);
  const navigate = useNavigate()
  const handleSignIn = () => {
    setSignIn(!isSignIn);
  };
  useEffect(()=>{
   const email =sessionStorage.getItem("email")
   const password =sessionStorage.getItem("password")
   if(email&&password){
    props.setCredentials(email,password);
    navigate("/dashboard");
   }else{
    navigate("/");
   }
      
  },[props,navigate])
  return (
    <>
      {isSignIn ? <SignIn handleSignIn={() => handleSignIn()} /> : ""}
      <nav className="nav-wrapper-outer">
        <nav className="nav-wrapper">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div style={{ display: "flex" }}>
              <img src={Bird} alt="logo" />
              <h5 style={{ margin: "0px 0px 0px 12px" }}>My Assignment {props.age} </h5>
            </div>
          </div>
              {
                !props.username?<div
                className="nav-attribute cursor-pointer"
                onClick={() => handleSignIn()}
              >
                Login
              </div>:
              <div className="nav-attribute cursor-pointer"
              onClick={()=>{
                props.setLogoutCredentials();
                sessionStorage.removeItem('email');
                sessionStorage.removeItem('password');
              }}
              >
                Logout
              </div>
              }
          
        </nav>
      </nav>
    </>
  );
}
const mapStateToProps = state => {
  return {
    username: state.login.credentials.username,
  };
};

const mapDispachToProps = (dispatch) => {
  return {
    setLogoutCredentials: (email,password) =>
      dispatch({ type: "SET_LOGOUT_CREDENTIALS",email,password}),
    setCredentials: (email,password) =>
      dispatch({ type: "SET_CREDENTIALS",email,password}),
  };
};
export default connect(
  mapStateToProps,
  mapDispachToProps
)(Index);