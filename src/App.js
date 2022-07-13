import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./Navbar";
import ContactList from "./pages/ContactList";
import EditList from "./pages/EditList";
import CreateNew from "./pages/CreateNew";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className="container">
        <Routes>
            <Route path="/" element={<ContactList />} />
            <Route path="/create" element={<CreateNew />} />
            <Route path="/edit" element={<EditList />} />
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
