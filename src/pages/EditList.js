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
    first: "",
    last: "",
    phone: "",
    email: "",
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
    <div>
      <section>
        <form action="#" method="post">
          <fieldset>
            <legend>Edit Contact Information</legend>

            <label htmlFor="first-name">First Name</label>
            <input
              type="text"
              name="first"
              id="first-name"
              onChange={handleChange}
              defaultValue={contact[0].first}
            ></input>

            <label htmlFor="last-name">Last Name</label>
            <input
              type="text"
              name="last"
              id="last-name"
              onChange={handleChange}
              defaultValue={contact[0].last}
            ></input>

            <label htmlFor="phone-number">Phone Number</label>
            <input
              type="text"
              name="phone"
              id="phone-number"
              onChange={handleChange}
              defaultValue={contact[0].phone}
            ></input>

            <label htmlFor="email-address">Email Address</label>
            <input
              type="text"
              name="email"
              id="email"
              onChange={handleChange}
              defaultValue={contact[0].email}
            ></input>

            <Link to={"/"}>
              <button
                id="addNewBtn"
                onClick={() => {
                  editContact();
                }}
              >
                Update
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

export default EditList;
