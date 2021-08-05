import { useState } from 'react';
import shortid from 'shortid';

import styles from "../FormStyles/FormStyles.module.css";

function Form ({ contactList, onSubmit }) {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");

    const InputValues = e => {
        const { name, value } = e.currentTarget;
        
        switch (name) {
            case "name":
                setName(value);
                break;
            case "number":
                setNumber(value);
                break;
            default:
                return;
        }
    };

    const addContact = e => {
        e.preventDefault();
        const checkName = contactList(name);
        if (checkName) {
            alert("You already have this contact name!!");
            return;
        }

        onSubmit({
            id: shortid.generate(),
            name,
            number,
        });

        resetInputValues();
    };

    const resetInputValues = () => {
        setName("");
        setNumber("");
    };

        const idName = shortid.generate();
        const idNumber = shortid.generate();

        return (
            <form className={styles.form} onSubmit={addContact}>
                <label className={styles.labelName} htmlFor={idName}>Name</label>
                <input
                    id={idName}
                    type="text"
                    name="name"
                    value={name}
                    onChange={InputValues}
                    autoComplete="off"
                />
                <label className={styles.labelNumber} htmlFor={idNumber}>Phone number</label>
                <input
                    id={idNumber}
                    placeholder="(0XX) XX-XX-XXX"
                    type="tel"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    name="number"
                    value={number}
                    onChange={InputValues}
                    autoComplete="off"
                    required
                />
                <button className={styles.btnForm} type="submit">Add contact</button>
            </form>
        );
}

export default Form;