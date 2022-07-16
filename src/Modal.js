import React from "react";
import { useContext } from "react";
import { ContactContext } from "./ContactContext";

function Modal() {
  const { contactData, setContactData } = useContext(ContactContext);
  const { setModalOpen } = useContext(ContactContext);
  const { contactToDelete} = useContext(ContactContext);

  const deleteContact = () => {
    setContactData(
      contactData.filter((eachContact) => eachContact.id !== contactToDelete.id)
    );
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setModalOpen(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Are You Sure You Delete Contact?</h1>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setModalOpen(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              setModalOpen(false);
              deleteContact();
            }}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
