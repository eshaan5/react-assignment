import { useState, useEffect, useMemo } from "react";
import Header from "./components/header/Header";
import Table from "./components/table/Table";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Details from "./components/details/Details";
import Pagination from "./components/pagination/Pagination";

let PageSize = 10;

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json")
      .then((response) => response.json())
      .then((users) => setUsers(users));
  }, [search]);

  const [currentPage, setCurrentPage] = useState(1);
  const [sortType, setSortType] = useState(0);
  const [sortOrder, setSortOrder] = useState('')

  const onSearch = (e) => {
    setSortType(0);
    setCurrentPage(1);
    setSearch(e.target.value);
  };

  const filtered = users.filter((user) => {
    return user.first_name.toLowerCase().includes(search.toLowerCase()) || user.last_name.toLowerCase().includes(search.toLowerCase());
  });

  let sorted = filtered;

  useMemo(() => {
    const sortArray = (type) => {
      const types = {
        1: "first_name",
        2: "last_name",
        3: "age",
        4: "email",
        5: "web",
      };
      const sortProperty = types[type];
      sorted = [...filtered];
      if (sortType !== "") {
        sorted.sort((a, b) => {
          if(sortOrder === 'asc'){
          if (a[sortProperty] < b[sortProperty]) {
            return -1;
          }
          if (a[sortProperty] > b[sortProperty]) {
            return 1;
          }
          return 0;
        }
        else {
          if (a[sortProperty] < b[sortProperty]) {
            return 1;
          }
          if (a[sortProperty] > b[sortProperty]) {
            return -1;
          }
          return 0;
        }
        });
      }
    };
    sortArray(sortType);
  }, [sortType, filtered]);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = Math.min(sorted.length, firstPageIndex + PageSize);
    return sorted.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, sorted]);

  return (
    <>
      <Router basename='/react-assignment'>
        <Routes>
          <Route path="/users"
            element={
              <>
                <Header onSearch={onSearch} />
                <Table filtered={currentTableData} setSortType={setSortType} setSortOrder={setSortOrder} />
                <Pagination className="pagination-bar" currentPage={currentPage} totalCount={sorted.length} pageSize={PageSize} onPageChange={(page) => setCurrentPage(page)} />
              </>
            }
          />
          <Route path="/users/:id" element={<Details setSearch={setSearch} users={sorted} setCurrentPage={setCurrentPage} setSortType={setSortType} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
