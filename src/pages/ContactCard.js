import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ContactContext } from "../ContactContext";

const ContactCard = ({ contact }) => {
  const { setModalOpen } = useContext(ContactContext);
  const { setContactToDelete } = useContext(ContactContext);

  const [showAllContactInfo, setShowAllContactInfo] = useState(false);

  // const deleteContact = () => {
  //   setContactData(
  //     contactData.filter((eachContact) => eachContact.id !== contact.id)
  //   );
  // };

  const chevronClass = showAllContactInfo
    ? "fa fa-chevron-up"
    : "fa fa-chevron-down";

  return (
    <div>
      <div className="card">
        <div className="card-header">
          <p className="full-name">{contact.first + " " + contact.last}</p>
          <div className="icons">
            <button
              className="chevron-icon"
              onClick={() => {
                setShowAllContactInfo(!showAllContactInfo);
              }}
            >
              <i className={chevronClass}></i>
            </button>
            <Link to={"/edit/" + contact.id}>
              <button className="edit-icon">
                <i className="fa-solid fa-pen-to-square"></i>
              </button>
            </Link>
            <button
              className="trash-icon"
              onClick={() => {
                setModalOpen(true);
                setContactToDelete(contact);
              }}
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>

        </div>
        <div className="card-body">
          <p className="phone-number">{contact.phone}</p>
          {showAllContactInfo && (
            <p className="email-address">{contact.email}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
