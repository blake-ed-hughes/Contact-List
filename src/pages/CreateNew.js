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
    <div>
      <section>
        <form>
          <fieldset>
            <legend>Create New Contact</legend>

            <label htmlFor="first-name">First Name</label>
            <input
              type="text"
              name="first"
              onChange={handleChange}
              id="first-name"
              defaultValue={""}
            ></input>

            <label htmlFor="last-name">Last Name</label>
            <input
              type="text"
              name="last"
              onChange={handleChange}
              id="last-name"
              defaultValue={""}
            ></input>

            <label htmlFor="phone-number">Phone Number</label>
            <input
              type="text"
              name="phone"
              onChange={handleChange}
              id="phone-number"
              defaultValue={""}
            ></input>

            <label htmlFor="email">Email Address</label>
            <input
              type="text"
              name="email"
              onChange={handleChange}
              id="email"
              defaultValue={""}
            ></input>

            <Link to={"/"}>
              <button
                onClick={() => {
                  addContact();
                  setContactData(contactData);
                }}
                id="addNewBtn"
              >
                Add Contact
              </button>
            </Link>

            <Link to={"/"}>
              <button id="cancelContactBtn">Cancel</button>
            </Link>

          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default CreateNew;
