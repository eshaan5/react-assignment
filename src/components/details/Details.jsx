import React from "react";
import { Link, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import "./details.css";

const Details = ({ setSearch, users, setCurrentPage, setSortType }) => {

  setSearch("");
  setCurrentPage(1)
  setSortType(0)

  // const [users, setUsers] = useState([]);
  //  const [userArray, setUserArray] = useState([])

  //  useEffect(() => {
  //    fetch("https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json")
  //      .then((response) => response.json())
  //      .then((users) => setUsers(users));
  //  });

  let { id } = useParams();
  const userArray = users.filter((user) => {
    return user.id == id;
  });

  return (
    <div>
      <div className="details__header">
          <div>
            <Link to="/users">
              <BiArrowBack size={28} />
            </Link>
          </div>
          <div>
            <h1 className="details_heading">Details: {`${userArray[0].first_name} ${userArray[0].last_name}`} </h1>
          </div>
        </div>
        <div className="details__container">
        <p>First Name: <b>{userArray[0].first_name}</b></p>
        <hr />
        <p>Last Name: <b>{userArray[0].last_name}</b></p>
        <hr />
        <p>Company_name: <b>{userArray[0].company_name}</b></p>
        <hr />
        <p>City: <b>{userArray[0].city}</b></p>
        <hr />
        <p>State: <b>{userArray[0].state}</b></p>
        <hr />
        <p>Zip: <b>{userArray[0].email}</b></p>
        <hr />
        <p>Email: <b>{userArray[0].email}</b></p>
        <hr />
        <p>Web: <b>{userArray[0].web}</b></p>
        <hr />
        <p>Age: <b>{userArray[0].age}</b></p>
        </div>
    </div>
  );
};

export default Details;
