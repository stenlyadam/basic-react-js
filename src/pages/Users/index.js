import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../../components/NavBar";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3004/users").then((res) => setUsers(res.data));
  }, []);

  return (
    <div>
      <NavBar />
      <h2>List Users</h2>
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>User Name</th>
        </tr>
        {users.map((item) => {
          return (
            <tr>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.username}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Users;
