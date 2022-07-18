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
      id: "10",
      first: "Michael",
      last: "Bringardner",
      phone: "(470)-736-4321",
      email: "michael.bringardner@gmail.com",
    },
    {
      id: "9",
      first: "Blake",
      last: "Hughes",
      phone: "(954)-540-3381",
      email: "blake.ed.hughes@gmail.com",
    },
    {
      id: "8",
      first: "Rick",
      last: "McCartney",
      phone: "(781)-223-0636",
      email: "rick.McCartney@gmail.com",
    },
    {
      id: "7",
      first: "Neil",
      last: "Fridd",
      phone: "(850)-990-2245",
      email: "neil.fridd@gmail.com",
    },
    {
      id: "6",
      first: "Sarah",
      last: "Spivey",
      phone: "(540)-877-2549",
      email: "sarah.spivey@gmail.com",
    },
    {
      id: "5",
      first: "Malee",
      last: "Bringardner",
      phone: "(470)-766-1721",
      email: "m.bringardner@gmail.com",
    },
    {
      id: "4",
      first: "Sasha",
      last: "Landau",
      phone: "(542)-421-0921",
      email: "m.bringardner@gmail.com",
    },
    {
      id: "3",
      first: "Victoria",
      last: "Jones",
      phone: "(624)-488-9873",
      email: "victoria.jones@gmail.com",
    },
    {
      id: "2",
      first: "Walker",
      last: "Pickens",
      phone: "(320)456-9834",
      email: "w.pickens@gmail.com",
    },
    {
      id: "1",
      first: "Emily",
      last: "Morris",
      phone: "(470)-326-6772",
      email: "m.morris@gmail.com",
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
