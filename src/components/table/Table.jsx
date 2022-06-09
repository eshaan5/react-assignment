import React from "react";
import "./table.css";
import { Link } from "react-router-dom";
import { BiUpArrow, BiDownArrow } from "react-icons/bi";

const Table = ({ filtered, setSortType, setSortOrder }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>
              <div className="t__head">
              First Name <div className="arrow__container">
              <BiUpArrow className="arrow" onClick={() => {setSortType(1); setSortOrder('asc')}} />
              <BiDownArrow className="arrow" onClick={() => {setSortType(1); setSortOrder('desc')}} />
              </div>
              </div>
            </th>
            <th>
            <div className="t__head">
              Last Name <div className="arrow__container">
              <BiUpArrow className="arrow" onClick={() => {setSortType(2); setSortOrder('asc')}} />
              <BiDownArrow className="arrow" onClick={() => {setSortType(2); setSortOrder('desc')}} />
              </div>
              </div>
            </th>
            <th>
            <div className="t__head">
              Age <div className="arrow__container">
              <BiUpArrow className="arrow" onClick={() => {setSortType(3); setSortOrder('asc')}} />
              <BiDownArrow className="arrow" onClick={() => {setSortType(3); setSortOrder('desc')}} />
              </div>
              </div>
            </th>
            <th>
            <div className="t__head">
              Email <div className="arrow__container">
              <BiUpArrow className="arrow" onClick={() => {setSortType(4); setSortOrder('asc')}} />
              <BiDownArrow className="arrow" onClick={() => {setSortType(4); setSortOrder('desc')}} />
              </div>
              </div>
            </th>
            <th>
            <div className="t__head">
              Web <div className="arrow__container">
              <BiUpArrow className="arrow" onClick={() => {setSortType(5); setSortOrder('asc')}} />
              <BiDownArrow className="arrow" onClick={() => {setSortType(5); setSortOrder('desc')}} />
              </div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((user) => {
            return (
              <tr key={user.id}>
                <td>
                  <Link
                    className="link name"
                    to={{
                      pathname: `/users/${user.id}`,
                      state: { users: user },
                    }}
                  >
                    {user.first_name}
                  </Link>
                </td>
                <td>{user.last_name}</td>
                <td>{user.age}</td>
                <td>{user.email}</td>
                <td>
                  <a className="link web" href={user.web} rel="noreferrer" target="_blank">
                    {user.web}
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
