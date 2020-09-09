import React, { useState, useEffect } from "react";
import "./dashboard.scss";
import { connect } from "react-redux";
import * as actionCreater from "./ActionDashboard";
function Dashboard(props) {
  const [users, setUsers] = useState([]);
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [gender, setGender] = useState("");
  const [id, setId] = useState("");
  const [isEditOpen, setIsEditOpen] = useState(false);

  const handleEdit = (name, age, email, id, phoneNo, gender) => {
    setUserName(name);
    setAge(age);
    setEmail(email);
    setId(id);
    setPhoneNo(phoneNo);
    setGender(gender);
    setIsEditOpen(!isEditOpen)
  };
  const submitEdit = (e) => {
    e.preventDefault();
    props.editUser(userName, age, email, id, phoneNo, gender);
    setId("");
  };
  useEffect(() => {
    if (props.username) {
      setUsers([...props.users]);
    }
  }, [props]);

  return (
    <div className="employees-wrapper">
      {users &&
        users.map((user) => {
          return (
            <div className="employee-wrapper" key={user.id}>
              <div className="employee-wrapper-inner">
                <div>
                  <div>
                    Employee: <b>{user.name}</b>
                  </div>
                  <div>
                    Age: <b>{user.age}yrs</b>
                  </div>
                  <div>
                    Gender: <b>{user.gender}</b>
                  </div>
                  <div>
                    {" "}
                    Email: <b>{user.email}</b>
                  </div>
                  <div>
                    {" "}
                    Phone No: <b>{user.phoneNo}</b>
                  </div>
                </div>
                <div>
                  <button
                    className="btn btn-secondary"
                    onClick={() =>
                      handleEdit(
                        user.name,
                        user.age,
                        user.email,
                        user.id,
                        user.phoneNo,
                        user.gender
                      )
                    }
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => props.deleteUser(user.id)}
                    className="btn btn-warning"
                    style={{ margin: "0px 0px 0px 12px" }}
                  >
                    Delete
                  </button>
                </div>
                <div hidden={id !== user.id} className="form-wrapper">
                  <form onSubmit={submitEdit}>
                    <div>
                      <label>Employee:</label>{" "}
                      <div>
                      <input
                        type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        required
                      />
                      </div>
                     
                    </div>
                    <div>
                      <label>Age:</label>{" "}
                      <div>
                      <input
                        type="text"
                        value={age}
                        required
                        onChange={(e) => setAge(e.target.value)}
                      />
                      </div>
                     
                    </div>
                    <div>
                      <label>Gender:</label>{" "}
                      <div>
                      <input
                        type="text"
                        value={gender}
                        required
                        onChange={(e) => setGender(e.target.value)}
                      />
                      </div>
                      
                    </div>
                    <div>
                      {" "}
                      <label>Email:</label>{" "}
                      <div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      </div>
                      
                    </div>
                    <div>
                      {" "}
                      <label>Phone No:</label>{" "}
                      <div>
                      <input
                        type="number"
                        value={phoneNo}
                        onChange={(e) => setPhoneNo(e.target.value)}
                        required
                      />
                      </div>
                    </div>
                    <div className="submit-wrapper">
                      <button className="btn btn-success" onClick={(e)=>{
                        e.preventDefault();
                        setId("");
                      }} style={{margin:"0px 8px 0px 0px"}} >
                        Cancel
                      </button>
                      <button type="submit" className="btn btn-info" >
                       Confirm
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    users: state.dashboard.users,
  };
};

const mapDispachToProps = (dispatch) => {
  return {
    deleteUser: (id) => dispatch(actionCreater.deleteUser(id)),
    editUser: (userName, age, email, id, phoneNo, gender) =>
      dispatch(
        actionCreater.editUser(userName, age, email, id, phoneNo, gender)
      ),
  };
};

export default connect(mapStateToProps, mapDispachToProps)(Dashboard);
