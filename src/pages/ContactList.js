import React, { useContext } from "react";
import ContactCard from "./ContactCard";
import { ContactContext } from "../ContactContext";

const ContactList = () => {
  const { contactData } = useContext(ContactContext);

  return (
    <div className="contacts">
      <ul style={{ maxHeight: "78vh", maxWidth: "100%", overflow: "auto" }}>
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
