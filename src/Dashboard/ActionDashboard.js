export const deleteUser=(id)=>{
    return {type:"DELETE_USER",id}
   }
export const editUser=(name, age, email, id, phoneNo, gender)=>{
    
    return {type:"EDIT_USER",name, age, email, id, phoneNo, gender}
   }