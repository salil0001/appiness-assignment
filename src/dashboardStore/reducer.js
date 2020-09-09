const initialState = {
  users: [
    {
      id: 1,
      name: "test1",
      age: "11",
      gender: "male",
      email: "test1@gmail.com",
      phoneNo: "9415346313",
    },
    {
      id: 2,
      name: "test2",
      age: "12",
      gender: "male",
      email: "test2@gmail.com",
      phoneNo: "9415346314",
    },
    {
      id: 3,
      name: "test3",
      age: "13",
      gender: "male",
      email: "test3@gmail.com",
      phoneNo: "9415346315",
    },
    {
      id: 4,
      name: "test4",
      age: "14",
      gender: "male",
      email: "test4@gmail.com",
      phoneNo: "9415346316",
    },
    {
      id: 5,
      name: "test5",
      age: "15",
      gender: "male",
      email: "test5@gmail.com",
      phoneNo: "9415346317",
    },
    {
      id: 6,
      name: "test6",
      age: "16",
      gender: "male",
      email: "test6@gmail.com",
      phoneNo: "9415346318",
    },
  ],
};

const reducer = (state = initialState, action) => {


  if (action.type==="DELETE_USER") {
      const newUsers=  state.users.filter((user=>action.id!==user.id))
      state.users=newUsers
      return {...state}
  }
  if (action.type==="EDIT_USER") {
    const {name, age, email, id, phoneNo, gender}=action
    const userIndex=state.users.findIndex(user=>user.id===id)
    const editUser=  state.users.filter((user=>action.id===user.id))[0]
    
    editUser.name=name
    editUser.age=age
    editUser.email=email
    editUser.phoneNo=phoneNo
    editUser.gender=gender

    state.users.splice(userIndex, 1, editUser);

    state.users=[...state.users]
      return {...state}
  }
  return {...state};
};

export default reducer;
