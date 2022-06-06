import { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Table from "./components/table/Table";

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json")
      .then((response) => response.json())
      .then((users) => setUsers(users));
  }, []);

  const onSearch = (e) => {
    setSearch(e.target.value);
  };

  const filtered = users.filter((user) => {
    return user.first_name.toLowerCase().includes(search.toLowerCase()) || user.last_name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
  <Header onSearch={onSearch} />
  <Table filtered={filtered} />
  </>
  );
}

export default App;
