import React from "react";
import { useContext } from "react";
import { ContactContext } from "./ContactContext";

function Modal() {
  const { contactData, setContactData } = useContext(ContactContext);
  const { setModalOpen } = useContext(ContactContext);
  const { contactToDelete } = useContext(ContactContext);

  const deleteContact = () => {
    setContactData(
      contactData.filter((eachContact) => eachContact.id !== contactToDelete.id)
    );
  };

  return (
    <div className="modal-background">
      <div className="modal-container" aria-label="delete contact modal">
        <div className="modal-close">
          <button
            className="modal-close-button"
            aria-label="modal close button"
            onClick={() => {
              setModalOpen(false);
            }}
          >
            x
          </button>
        </div>
        <div className="modal-text" aria-label="modal content text">
          <h1>Are You Sure You Want To Delete Contact?</h1>
        </div>
        <div className="modal-buttons" aria-label="modal buttons">
          <button
            onClick={() => {
              setModalOpen(false);
              deleteContact();
            }}
            id="continue-button"
            aria-label="contine to delete contact button"
          >
            Continue
          </button>
          <button
            onClick={() => {
              setModalOpen(false);
            }}
            id="cancel-delete-button"
            aria-label="cancel contact delete button"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
