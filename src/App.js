import { useState, useEffect } from "react";
import Form from "./components/Form/Form";
import СontactList from "./components/ContactList/ContactList";
import SearchContact from "./components/SearchContact/SearchContact";
import React from "react";

import styles from "./components/FormStyles/FormStyles.module.css";


function App () {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem("contacts")) ?? [];
  });

  const [filter, setFilter] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (NewContact) => {
    setContacts([NewContact, ...contacts]);
  };

  const valuesFilter = e => {
    const { value } = e.currentTarget;
    setFilter(value);
  };

  const getFilter = () => {
    const filtredValues = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(filtredValues),
    );
  };

  const checkName = (newName) => {
    return contacts.some(
      ({ name }) => name === Object.values(newName).join(''),
    );
  };

  const deleteContact = (contactId) => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.headingForm}>Phone Book</h1>
      <Form onSubmit={addContact} contactList={checkName} />
      <h2 className={styles.contactList}>Contacts</h2>
      <SearchContact value={filter} SearchContact={valuesFilter} />
      <СontactList contactList={getFilter()} onDeleted={deleteContact} />
    </div>
  );
}

export default App;
