import React, { useContext } from "react";
import ContactCard from "./ContactCard";
import { ContactContext } from "../ContactContext";

const ContactList = () => {
  const { contactData } = useContext(ContactContext);

  return (
    <div className="contacts" aria-label="contact list">
      <ul aria-label="unordered list of contacts">
        {contactData.map((contact, index) => (
          <li key={index}>
            <ContactCard key={index} contact={contact} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
