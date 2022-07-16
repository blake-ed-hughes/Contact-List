import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import ContactList from "./pages/ContactList";
import EditList from "./pages/EditList";
import CreateNew from "./pages/CreateNew";
import Modal from "./Modal";
import { ContactContext } from "./ContactContext";

const App = () => {
  const [contactData, setContactData] = useState([
    {
      id: "5",
      first: "Blake",
      last: "Hughes",
      phone: "(954)-540-3381",
      email: "blake.ed.hughes@gmail.com",
    },
    {
      id: "4",
      first: "Roger",
      last: "Black",
      phone: "(350)-576-3671",
      email: "roger.black@gmail.com",
    },
    {
      id: "3",
      first: "Neil",
      last: "Fridd",
      phone: "(850)-990-2245",
      email: "neil.fridd@gmail.com",
    },
    {
      id: "2",
      first: "Sarah",
      last: "Spivey",
      phone: "(540)-877-2549",
      email: "sarah.spivey@gmail.com",
    },
    {
      id: "1",
      first: "Malee",
      last: "Bringadner",
      phone: "(470)-766-1721",
      email: "m.bringardner@gmail.com",
    },
  ]);

  const [modalOpen, setModalOpen] = useState(false);

  const [contactToDelete, setContactToDelete] = useState({});

  return (
    <ContactContext.Provider
      value={{
        contactData,
        setContactData,
        modalOpen,
        setModalOpen,
        contactToDelete,
        setContactToDelete,
      }}
    >
      <div className="App">

        {modalOpen && <Modal />}

        <BrowserRouter>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<ContactList />} />
              <Route path="/create" element={<CreateNew />} />
              <Route path="/edit/:id" element={<EditList />} />
            </Routes>
          </div>
        </BrowserRouter>

      </div>
    </ContactContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
