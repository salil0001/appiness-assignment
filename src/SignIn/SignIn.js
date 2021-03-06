import React, { useState } from "react";
import Modal from "../Modal/Modal";
import { connect } from "react-redux";
import './SignIn.scss';
function SignIn(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const userLogin = (event) => {
    event.preventDefault();

    if (email === "hruday@gmail.com" && password === 'hruday123') {
      sessionStorage.setItem("email", email);
      sessionStorage.setItem("password", password);
      
      props.setCredentials(email,password)
      props.handleSignIn();
    } else {
      alert("Invalid Credentials!!");
      setEmail("");
      setPassword("");
    }
  };
  
  return (
    <Modal>
      <div
        className="sign-in-heading"
      >
        <div style={{fontSize:"20px"}}><b>Sign In</b></div>
        <img
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjM0OC4zMzNweCIgaGVpZ2h0PSIzNDguMzM0cHgiIHZpZXdCb3g9IjAgMCAzNDguMzMzIDM0OC4zMzQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDM0OC4zMzMgMzQ4LjMzNDsiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZD0iTTMzNi41NTksNjguNjExTDIzMS4wMTYsMTc0LjE2NWwxMDUuNTQzLDEwNS41NDljMTUuNjk5LDE1LjcwNSwxNS42OTksNDEuMTQ1LDAsNTYuODUNCgkJYy03Ljg0NCw3Ljg0NC0xOC4xMjgsMTEuNzY5LTI4LjQwNywxMS43NjljLTEwLjI5NiwwLTIwLjU4MS0zLjkxOS0yOC40MTktMTEuNzY5TDE3NC4xNjcsMjMxLjAwM0w2OC42MDksMzM2LjU2Mw0KCQljLTcuODQzLDcuODQ0LTE4LjEyOCwxMS43NjktMjguNDE2LDExLjc2OWMtMTAuMjg1LDAtMjAuNTYzLTMuOTE5LTI4LjQxMy0xMS43NjljLTE1LjY5OS0xNS42OTgtMTUuNjk5LTQxLjEzOSwwLTU2Ljg1DQoJCWwxMDUuNTQtMTA1LjU0OUwxMS43NzQsNjguNjExYy0xNS42OTktMTUuNjk5LTE1LjY5OS00MS4xNDUsMC01Ni44NDRjMTUuNjk2LTE1LjY4Nyw0MS4xMjctMTUuNjg3LDU2LjgyOSwwbDEwNS41NjMsMTA1LjU1NA0KCQlMMjc5LjcyMSwxMS43NjdjMTUuNzA1LTE1LjY4Nyw0MS4xMzktMTUuNjg3LDU2LjgzMiwwQzM1Mi4yNTgsMjcuNDY2LDM1Mi4yNTgsNTIuOTEyLDMzNi41NTksNjguNjExeiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="
          className="close-button cursor-pointer"
          width="18px"
          alt="svg"
          onClick={() => props.handleSignIn()}
        />
      </div>

      <form onSubmit={userLogin}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            required
            value={email}
            onChange={onChangeEmail}
            placeholder="user@gmail.com"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            onChange={onChangePassword}
            value={password}
            required
            placeholder="password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Sign In
        </button>
      </form>
    </Modal>
  );
}
const mapStateToProps = (state) => {
  return {
    username: state.login.credentials.username,
    password: state.login.credentials.password,
  };
};
const mapDispachToProps = (dispatch) => {
  return {
    setCredentials: (email, password) =>
      dispatch({ type: "SET_CREDENTIALS", email, password }),
  };
};
export default connect(mapStateToProps, mapDispachToProps)(SignIn);
