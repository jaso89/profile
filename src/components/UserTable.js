import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { Header } from "./Header";
import { Users } from "./Users";
import { DisplayBoard } from "./DisplayBoard";
import CreateUser from "./CreateUser";

const UserTable = () => {
  const [user, setUser] = useState({});
  const [users, setUsers] = useState([
    {
      firstName: "first1",
      lastName: "last1",
      email: "abc@gmail.com",
    },
    {
      firstName: "first2",
      lastName: "last2",
      email: "abc@gmail.com",
    },
    {
      firstName: "first3",
      lastName: "last3",
      email: "abc@gmail.com",
    },
  ]);
  const [numberOfUsers, setNumberOfUsers] = useState(0);

  const createUser = (user) => {
      console.log(user)
    const newUsers = [...users, user];
    setUsers(newUsers);
  }

  const userCreate = (e) => {
    createUser(user)
    setNumberOfUsers(numberOfUsers + 1);
  };

  const getAllUsers = () => {
      return users
  }

  const fetchAllUsers = () => {
    let users = getAllUsers()
    console.log(users)
    setUsers(users);
    setNumberOfUsers(users.length);
  };

  useEffect(() => {
    let users = getAllUsers()
      setUsers(users);
      setNumberOfUsers(users.length);
  }, []);

  const onChangeForm = (e) => {
    if (e.target.name === "firstname") {
      user.firstName = e.target.value;
    } else if (e.target.name === "lastname") {
      user.lastName = e.target.value;
    } else if (e.target.name === "email") {
      user.email = e.target.value;
    }
    setUser(user);
  };
  return (
    <div>
      <Header></Header>
      <div className="container mrgnbtm">
        <div className="row">
          <div className="col-md-8">
            <CreateUser
              user={user}
              onChangeForm={onChangeForm}
              createUser={userCreate}
            ></CreateUser>
          </div>
          <div className="col-md-4">
            <DisplayBoard
              numberOfUsers={numberOfUsers}
              getAllUsers={fetchAllUsers}
            ></DisplayBoard>
          </div>
        </div>
      </div>
      <div className="row mrgnbtm">
        <Users users={users}></Users>
      </div>
    </div>
  );
};

export default UserTable;
