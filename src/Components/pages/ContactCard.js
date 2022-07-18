import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ContactContext } from "../ContactContext";

const ContactCard = ({ contact }) => {
  const { setModalOpen } = useContext(ContactContext);
  const { setContactToDelete } = useContext(ContactContext);

  const [showAllContactInfo, setShowAllContactInfo] = useState(false);

  const chevronClass = showAllContactInfo
    ? "fa fa-chevron-up"
    : "fa fa-chevron-down";

  return (
    <div className="card" aria-label="contact card">
      <div className="card-header" aria-label="contact card header">
        <p className="full-name" aria-label="contact full name">
          {contact.first + " " + contact.last}
        </p>
        <div className="icons" aria-label="contact card buttons">
          <button
            className="chevron-icon"
            aria-label="expand to display all contact info button"
            onClick={() => {
              setShowAllContactInfo(!showAllContactInfo);
            }}
          >
            <i className={chevronClass}></i>
          </button>
          <Link to={"/edit/" + contact.id}>
            <button className="edit-icon" aria-label="edit contact info button">
              <i className="fa-solid fa-pen-to-square"></i>
            </button>
          </Link>
          <button
            className="trash-icon"
            aria-label="delete contact button"
            onClick={() => {
              setModalOpen(true);
              setContactToDelete(contact);
            }}
          >
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
      <div className="card-body" aria-label="contact card body">
        <p className="phone-number" aria-label="contact phone number">
          {contact.phone}
        </p>
        {showAllContactInfo && (
          <p className="email-address" aria-label="contact email address">
            {contact.email}
          </p>
        )}
      </div>
    </div>
  );
};

export default ContactCard;
