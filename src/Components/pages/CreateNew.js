import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { ContactContext } from "../ContactContext";

const CreateNew = () => {
  const { contactData, setContactData } = useContext(ContactContext);

  const [newContact, setNewContact] = useState({
    id: String(contactData.length + 1),
    first: "",
    last: "",
    phone: "",
    email: "",
  });

  const handleChange = (event) => {
    setNewContact({
      ...newContact,
      [event.target.name]: event.target.value,
    });
  };

  const addContact = () => {
    contactData.unshift(newContact);
  };

  return (
    <section aria-label="create new contact page">
      <form aria-label="create new contact form">
        <fieldset>
          <legend aria-label="create new contact title">
            Create New Contact
          </legend>

          <label htmlFor="first-name" aria-label="first name form input label">
            First Name
          </label>
          <input
            type="text"
            name="first"
            onChange={handleChange}
            id="first-name"
            aria-label="first name form input"
            defaultValue={""}
          ></input>

          <label htmlFor="last-name" aria-label="last name form input label">
            Last Name
          </label>
          <input
            type="text"
            name="last"
            onChange={handleChange}
            id="last-name"
            aria-label="last name form input"
            defaultValue={""}
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
            onChange={handleChange}
            id="phone-number"
            aria-label="phone number form input"
            defaultValue={""}
          ></input>

          <label htmlFor="email" aria-label="email form input label">
            Email Address
          </label>
          <input
            type="text"
            name="email"
            onChange={handleChange}
            id="email"
            aria-label="email form input"
            defaultValue={""}
          ></input>

          <Link to={"/"}>
            <button
              onClick={() => {
                addContact();
                setContactData(contactData);
              }}
              id="add-new-button"
              aria-label="add new contact button"
            >
              Add Contact
            </button>
          </Link>

          <Link to={"/"}>
            <button id="cancel-button" aria-label="cancel contact add button">
              Cancel
            </button>
          </Link>
        </fieldset>
      </form>
    </section>
  );
};

export default CreateNew;
