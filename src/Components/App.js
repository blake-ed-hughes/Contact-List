import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import ContactList from "./pages/ContactList";
import EditList from "./pages/EditList";
import CreateNew from "./pages/CreateNew";
import NotFound from "./pages/NotFound";
import Modal from "./Modal";
import { ContactContext } from "./ContactContext";

const App = () => {
  const [contactData, setContactData] = useState([
    {
      id: "(470)-736-4321",
      first: "Michael",
      last: "Bringardner",
      phone: "(470)-736-4321",
      email: "michael.bringardner@gmail.com",
    },
    {
      id: "(954)-540-3381",
      first: "Blake",
      last: "Hughes",
      phone: "(954)-540-3381",
      email: "blake.ed.hughes@gmail.com",
    },
    {
      id: "(781)-223-0636",
      first: "Rick",
      last: "McCartney",
      phone: "(781)-223-0636",
      email: "rick.McCartney@gmail.com",
    },
    {
      id: "(850)-990-2245",
      first: "Neil",
      last: "Fridd",
      phone: "(850)-990-2245",
      email: "neil.fridd@gmail.com",
    },
    {
      id: "(540)-877-2549",
      first: "Sarah",
      last: "Spivey",
      phone: "(540)-877-2549",
      email: "sarah.spivey@gmail.com",
    },
    {
      id: "(470)-766-1721",
      first: "Malee",
      last: "Bringardner",
      phone: "(470)-766-1721",
      email: "m.bringardner@gmail.com",
    },
    {
      id: "(542)-421-0921",
      first: "Sasha",
      last: "Landau",
      phone: "(542)-421-0921",
      email: "m.bringardner@gmail.com",
    },
    {
      id: "(624)-488-9873",
      first: "Victoria",
      last: "Jones",
      phone: "(624)-488-9873",
      email: "victoria.jones@gmail.com",
    },
    {
      id: "(320)456-9834",
      first: "Walker",
      last: "Pickens",
      phone: "(320)456-9834",
      email: "w.pickens@gmail.com",
    },
    {
      id: "(470)-326-6772",
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
      {modalOpen && <Modal />}
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<ContactList />} />
            <Route path="/create" element={<CreateNew />} />
            <Route path="/edit/:id" element={<EditList />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </ContactContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
