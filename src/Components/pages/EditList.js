import { useState, useContext } from "react";
import { ContactContext } from "../ContactContext";
import { Link } from "react-router-dom";

const EditList = () => {
  const { contactData } = useContext(ContactContext);

  const [contactPathId] = useState(window.location.href.slice(27));
  const [contact] = useState(
    contactData.filter((eachContact) => eachContact.id === contactPathId)
  );

  const [updatedContact, setUpdatedContact] = useState({
    id: String(contactPathId),
    first: contact[0].first,
    last: contact[0].last,
    phone: contact[0].phone,
    email: contact[0].email,
  });

  const handleChange = (event) => {
    setUpdatedContact({
      ...updatedContact,
      [event.target.name]: event.target.value,
    });
  };

  const contactIndex = contactData.findIndex(
    (eachContact) => eachContact.id === contactPathId
  );

  const editContact = () => {
    contactData[contactIndex] = updatedContact;
  };

  return (
    <section aria-label="edit contact page">
      <form aria-label="edit contact form">
        <fieldset>
          <legend aria-label="edit contact title">
            Edit Contact Information
          </legend>

          <label htmlFor="first-name" aria-label="first name form input label">
            First Name
          </label>
          <input
            type="text"
            name="first"
            id="first-name"
            aria-label="first name form input"
            onChange={handleChange}
            defaultValue={contact[0].first}
          ></input>

          <label htmlFor="last-name" aria-label="last name form input label">
            Last Name
          </label>
          <input
            type="text"
            name="last"
            id="last-name"
            aria-label="last name form input"
            onChange={handleChange}
            defaultValue={contact[0].last}
          ></input>

          <label
            htmlFor="phone-number"
            aria-label="phone number form input label"
          >
            Phone Number
          </label>
          <input
            type="text"
            name="phone"
            id="phone-number"
            aria-label="phone number form input"
            onChange={handleChange}
            defaultValue={contact[0].phone}
          ></input>

          <label htmlFor="email-address" aria-label="email form input label">
            Email Address
          </label>
          <input
            type="text"
            name="email"
            id="email"
            aria-label="email form input"
            onChange={handleChange}
            defaultValue={contact[0].email}
          ></input>

          <Link to={"/"}>
            <button
              id="add-new-button"
              aria-label="update contact button"
              onClick={() => {
                editContact();
              }}
            >
              Update
            </button>
          </Link>

          <Link to={"/"}>
            <button id="cancel-button" aria-label="cancel edit button">
              Cancel
            </button>
          </Link>
        </fieldset>
      </form>
    </section>
  );
};

export default EditList;
